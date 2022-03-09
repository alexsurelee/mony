import React from "react";
import { LinksFunction } from "remix";
import NavBar, { links as navBarLinks } from "~/components/NavBar/NavBar";

import styles from "~/components/Page/Page.css";

export const links: LinksFunction = () => {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
};

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Page;
