import { LinksFunction, LoaderFunction, redirect } from "@remix-run/node";

import styles from "~/routes/budget/budget.css";
import { getAuth } from "@clerk/remix/ssr.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect("/sign-in?redirect_url=" + request.url);
  }
  return null;
};

export default function Budget() {
  return (
    <div>
      <h1>This is yo budget</h1>
    </div>
  );
}
