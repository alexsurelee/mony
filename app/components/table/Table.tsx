import type { LinksFunction } from "@remix-run/node";
import classNames from "classnames";

import stylesUrl from "app/styles/components/table/table.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface TableProps {
  className?: string;
  children: React.ReactChild;
}

export function Table(props: TableProps) {
  const { className, children } = props;
  return <table className={classNames("table", className)}>{children}</table>;
}
