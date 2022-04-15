import { LinksFunction, LoaderFunction, redirect } from "remix";
import Button from "~/components/Button/Button";

import styles from "~/routes/budget/Budget.css";
import { links as buttonLinks } from "~/components/Button/Button";
import { getAuth } from "@clerk/remix/ssr.server";

export const links: LinksFunction = () => {
  return [...buttonLinks(), { rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { userId, sessionId } = await getAuth(request);
  if (!userId) {
    return redirect("sign-in");
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
