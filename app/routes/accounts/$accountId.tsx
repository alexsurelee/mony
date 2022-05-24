import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import styles from "~/styles/routes/accounts/accounts.css";
import { getAuth } from "@clerk/remix/ssr.server";
import type { Account, Paginated, Transaction } from "akahu";
import { useLoaderData } from "@remix-run/react";
import {
  AccountPanel,
  links as accountPanelLinks,
} from "~/components/accounts/AccountPanel";
import { getAccount, getAccounts, listTransactions } from "~/helpers/akahu";

export const links: LinksFunction = () => {
  return [...accountPanelLinks(), { rel: "stylesheet", href: styles }];
};

type LoaderData = { account: Account; transactions: Paginated<Transaction> };

export const loader: LoaderFunction = async ({ params, request }) => {
  // Authenticated users only
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + request.url);
  }

  // Get accounts via akahu
  const accountId = params.accountId;
  if (!accountId) throw new Error("Account not found");

  const account = await getAccount(accountId);
  const transactions = await listTransactions(accountId);

  const data: LoaderData = { account, transactions };
  return json(data);
};

export default function AccountPage() {
  const { account, transactions } = useLoaderData<LoaderData>();

  return (
    <>
      <h1>{account.name}</h1>
      <div className="transactions-list">
        {transactions.items.map((transaction) => (
          <div key={transaction._id} className="transaction">
            <div className="transaction--date">{transaction.date}</div>
            <div className="transaction--amount">{transaction.amount}</div>
            <div className="transaction--description">
              {transaction.description}
            </div>
            <div className="transaction--type">{transaction.type}</div>
          </div>
        ))}
      </div>
    </>
  );
}
