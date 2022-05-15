import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import styles from "~/styles/routes/accounts/accounts.css";
import { getAuth } from "@clerk/remix/ssr.server";
import type { Account } from "akahu";
import { useLoaderData } from "@remix-run/react";
import {
  AccountPanel,
  links as accountPanelLinks,
} from "~/components/accounts/AccountPanel";
import { getAccounts } from "~/helpers/akahu";

export const links: LinksFunction = () => {
  return [...accountPanelLinks(), { rel: "stylesheet", href: styles }];
};

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
            <AccountPanel
              key={_id}
              name={name}
              balance={balance?.current || 0}
            />
          );
        })}
      </div>
    </>
  );
}
