import { UserButton } from "@clerk/remix";
import type { LinksFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";

import stylesUrl from "app/styles/components/navbar/navbar.css";
import logo from "public/mony.png"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/"><img alt="Mony Logo" src={logo}/></Link>
      <NavLink to="/budget">Budget</NavLink>
      <NavLink to="/accounts">Accounts</NavLink>
      <div className="user-button-wrapper">
        <UserButton />
      </div>
    </nav>
  );
}
