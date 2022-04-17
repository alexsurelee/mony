import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/components/navbar/navbar";

import styles from "~/routes/index/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Mony</h1>
      <p>
        Mony is currently in development. The expected launch date is February
        2023.
      </p>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
}
