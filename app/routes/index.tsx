import type { LinksFunction } from "@remix-run/node";
import { Button, links as buttonLinks } from "app/components/button/Button";

import styles from "app/styles/routes/index/index.css";

export const links: LinksFunction = () => {
  return [...buttonLinks(), { rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div className="welcome">
      <h1>Welcome to Mony</h1>
      <p>Mony is currently in development.</p>
      <p>
        We can't wait to introduce you to the best way to budget in Aotearoa.
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
