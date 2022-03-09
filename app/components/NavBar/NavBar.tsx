import { Link, LinksFunction } from "remix";

import stylesUrl from "~/components/NavBar/NavBar.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function NavBar() {
  return (
    <nav id="navbar">
      <h1>KiwiBudget</h1>
      <Link to="/">Home</Link>
      <Link to="/budget">Budget</Link>
      <Link to="/accounts">Accounts</Link>
    </nav>
  );
}
