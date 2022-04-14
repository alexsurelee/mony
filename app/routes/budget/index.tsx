import { LinksFunction } from "remix";
import Button from "~/components/Button/Button";

import styles from "~/routes/budget/Budget.css";
import { links as buttonLinks } from "~/components/Button/Button";

export const links: LinksFunction = () => {
  return [...buttonLinks(), { rel: "stylesheet", href: styles }];
};

export default function Budget() {
  return (
    <div>
      <h1>This is yo budget</h1>
    </div>
  );
}
