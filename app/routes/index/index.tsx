import { LinksFunction } from "@remix-run/node";
import { Button, links as buttonLinks } from "~/components/button/button";

import styles from "~/routes/index/index.css";

export const links: LinksFunction = () => {
  return [...buttonLinks(), { rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Mony</h1>
      <p>
        Mony is currently in development. The expected launch date is February
        2023.
      </p>
      <div className="button-group">
        <Button variant="link" to="/sign-up">
          Sign Up
        </Button>
        <Button variant="link" to="/sign-in">
          Sign In
        </Button>
      </div>
    </div>
  );
}
