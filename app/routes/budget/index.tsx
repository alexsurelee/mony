import { LinksFunction } from "remix";

import styles from "~/routes/budget/Budget.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Budget() {
  return (
    <div>
      <h1>This is yo budget</h1>
    </div>
  );
}
