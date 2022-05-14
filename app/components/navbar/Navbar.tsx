import { UserButton } from "@clerk/remix";
import type { LinksFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";

import stylesUrl from "app/styles/components/navbar/navbar.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/">Home</Link>
      <NavLink to="/budget">Budget</NavLink>
      <NavLink to="/accounts">Accounts</NavLink>
      <div className="user-button-wrapper">
        <UserButton />
      </div>
    </nav>
  );
}
