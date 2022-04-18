import { UserButton } from "@clerk/remix";
import { LinksFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";

import stylesUrl from "~/styles/components/navbar/navbar.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/">Home</Link>
      <NavLink to="/budget">Budget</NavLink>
      <NavLink to="/accounts">Accounts</NavLink>
      <UserButton />
    </nav>
  );
}
