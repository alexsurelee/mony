import { LinksFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

import stylesUrl from "~/components/navbar/navbar.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/budget">Budget</NavLink>
        </li>
        <li>
          <NavLink to="/accounts">Accounts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
