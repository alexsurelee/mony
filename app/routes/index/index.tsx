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
        <p></p>
      </div>
    </Page>
  );
}
