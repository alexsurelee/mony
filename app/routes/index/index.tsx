import { LinksFunction } from "remix";
import Page, { links as pageLinks } from "~/components/Page/Page";

import styles from "~/routes/index/index.css";

export const links: LinksFunction = () => {
  return [...pageLinks(), { rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <Page>
      <div>
        <h1>Welcome to KiwiBudget</h1>
        <p>
          KiwiBudget is currently in development. The expected launch date is
          February 2023.
        </p>
      </div>
    </Page>
  );
}
