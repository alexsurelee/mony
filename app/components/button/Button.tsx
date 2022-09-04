import type { LinksFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import stylesUrl from "app/styles/components/button/button.css";
import { Link, NavLink } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: RemixLinkProps["to"];
  variant?: "default" | "link" | "navlink";
}

export function Button({
  children,
  to,
  variant = "default",
  ...buttonProps
}: ButtonProps) {
  const button = <button {...buttonProps}>{children}</button>;

  if (variant === "link" && to) {
    return <Link to={to}>{button}</Link>;
  } else if (variant === "navlink" && to) {
    return <NavLink to={to}>{button}</NavLink>;
  }
  return button;
}
