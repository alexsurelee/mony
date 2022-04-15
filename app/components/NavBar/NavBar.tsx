import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, LinksFunction } from "remix";

import stylesUrl from "~/components/NavBar/NavBar.css";
import { links as iconButtonLinks } from "../IconButton/IconButton";
import IconButton from "../IconButton/IconButton";
import { useState } from "react";
import { UserButton } from "@clerk/remix";

export const links: LinksFunction = () => {
  return [...iconButtonLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function NavBar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav id="navbar" className={isNavbarOpen ? "open" : undefined}>
      <Link to="/">KiwiBudget</Link>
      <NavLink to="/budget">Budget</NavLink>
      <NavLink to="/accounts">Accounts</NavLink>
      <IconButton
        icon={faBars}
        className="hamburger"
        onClick={() => setNavbarOpen(!isNavbarOpen)}
      />
      <UserButton />
    </nav>
  );
}
