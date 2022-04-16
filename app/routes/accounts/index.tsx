import { LinksFunction, LoaderFunction, redirect } from "remix";

import styles from "~/routes/accounts/Accounts.css";
import { getAuth } from "@clerk/remix/ssr.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect("/sign-in");
  }
  return null;
};

export default function Accounts() {
  return (
    <div>
      <h1>This is yo Accounts</h1>
    </div>
  );
}
