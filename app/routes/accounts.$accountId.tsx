import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import styles from "~/styles/routes/accounts/accounts.css";
import type { Account, Paginated, Transaction } from "akahu";
import { useLoaderData } from "@remix-run/react";
import { getAccount, listTransactions } from "~/helpers/akahu";
import {
  TransactionList,
  links as transactionListLinks,
} from "~/components/accounts/TransactionList";
import {verifyUserAuthenticated} from "~/utils/verifyUserAuthenticated";
import {getDB} from "../../supabase.server";

export const links: LinksFunction = () => {
  return [...transactionListLinks(), { rel: "stylesheet", href: styles }];
};

type LoaderData = { account: Account; transactions: Paginated<Transaction> };

export function ErrorBoundary({error}: {error: Error}) {
  console.error(error);
  return <div>
    <div>There was an error!</div>
    <div>{error.message}</div>
  </div>
}

export const loader: LoaderFunction = async ({ params, request }) => {
  await verifyUserAuthenticated(request)

  // Get accounts via akahu
  const accountId = params.accountId;
  if (!accountId) throw new Error("Account not found");

  const akahuAccount = await getAccount(accountId);
  const akahuTransactions = await listTransactions(accountId);

  const {supabase} = await getDB(request);

  const { data: dbData, error } = await supabase.from("accounts").select().eq("account_id", accountId)

  const data: LoaderData = { account, transactions };
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
