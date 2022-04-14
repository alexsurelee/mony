import { LinksFunction } from "remix";
import classNames from "classnames";

import stylesUrl from "~/components/Table/Table.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface TableProps {
  className?: string;
  children: React.ReactChild;
}

export default function Table(props: TableProps) {
  const { className, children } = props;
  return <table className={classNames("table", className)}>{children}</table>;
}
