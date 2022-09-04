import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import styles from "~/styles/routes/accounts/accounts.css";
import type { Account } from "akahu";
import { Link, useLoaderData } from "@remix-run/react";
import {
  AccountPanel,
  links as accountPanelLinks,
} from "~/components/accounts/AccountPanel";
import { getAccounts } from "~/helpers/akahu";
import { getAuth } from "@clerk/remix/ssr.server";

export const links: LinksFunction = () => {
  return [...accountPanelLinks(), { rel: "stylesheet", href: styles }];
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div>
      <h2>There was a problemo 😭</h2>
      <div>{error.message}</div>
    </div>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  // Authenticated users only
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + request.url);
  }

  // Get accounts via akahu
  const accounts = await getAccounts();
  return json(accounts);
};

export default function Accounts() {
  const accounts = useLoaderData();
  return (
    <>
      <h1>Accounts</h1>
      <div className="account-list">
        {accounts.map((account: Account) => {
          const { _id, name, balance } = account;
          return (
            <Link key={_id} to={_id}>
              <AccountPanel name={name} balance={balance?.current || 0} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
