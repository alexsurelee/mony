import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import styles from "~/styles/routes/accounts/accounts.css";
import type { Account } from "akahu";
import { useLoaderData } from "@remix-run/react";
import { getAccount, listTransactions } from "~/helpers/akahu";
import {
  TransactionList,
  links as transactionListLinks,
} from "~/components/accounts/TransactionList";
import { verifyUserIsAuthenticated } from "~/utils/verifyUserIsAuthenticated";
import { getDB } from "../../supabase.server";
import type { definitions } from "../../types/database";

export const links: LinksFunction = () => {
  return [...transactionListLinks(), { rel: "stylesheet", href: styles }];
};

type LoaderData = {
  account: Account;
  transactions: definitions["transactions"][] | null;
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div>
      <div>There was an error!</div>
      <div>{error.message}</div>
    </div>
  );
}

export const loader: LoaderFunction = async ({ params, request }) => {
  await verifyUserIsAuthenticated(request);

  // Get accounts via akahu
  const accountId = params.accountId;
  if (!accountId) throw new Error("Account not found");

  const akahuAccount = await getAccount(accountId);
  const akahuTransactions = await listTransactions(accountId);

  const { supabase } = await getDB(request);

  const itemsToUpdate = akahuTransactions.items.map((transaction) => ({
    transaction_id: transaction._id,
    account_id: transaction._account,
    user_id: transaction._user,
    amount: transaction.amount.toString(),
    is_inflow: transaction.type === "CREDIT",
    is_outflow: transaction.type === "DEBIT",
    description: transaction.description,
    transaction_date: transaction.date,
  }));

  const { data: dbData } = await supabase
    .from<definitions["transactions"]>("transactions")
    .upsert(itemsToUpdate)
    .neq("is_user_modified", true);
  const data: LoaderData = { account: akahuAccount, transactions: dbData };
  return json(data);
};

export default function AccountPage() {
  const { account, transactions } = useLoaderData<LoaderData>();

  return (
    <>
      <h1>{account.name}</h1>
      <TransactionList transactions={transactions} />
    </>
  );
}
