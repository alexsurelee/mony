import { UserButton } from "@clerk/remix";
import { Link, NavLink } from "@remix-run/react";

export function MonyHeader() {
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
