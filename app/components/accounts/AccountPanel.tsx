import type { LinksFunction } from "@remix-run/node";
import type { ReactChild } from "react";
import stylesUrl from "app/styles/components/accounts/AccountPanel.css";
import type { RemixLinkProps } from "@remix-run/react/components";
import { Link, NavLink } from "@remix-run/react/components";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface AccountPanelProps {
  name: string;
  balance: number;
}

export function AccountPanel({ name, balance }: AccountPanelProps) {
  const formatter = Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  });
  return (
    <div className="account-panel">
      <div className="account-panel--name">{name}</div>
      <div className="account-panel--balance">{formatter.format(balance)}</div>
    </div>
  );
}
