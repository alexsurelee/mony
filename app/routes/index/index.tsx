import { Button, Group } from "@mantine/core";
import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import styles from "~/routes/index/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to KiwiBudget</h1>
      <p>
        KiwiBudget is currently in development. The expected launch date is
        February 2023.
      </p>
      <Group>
        <Button component={Link} to="/sign-up">
          Sign Up
        </Button>
        <Button component={Link} to="/sign-in">
          Sign In
        </Button>
      </Group>
    </div>
  );
}
