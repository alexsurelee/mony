import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";

import stylesUrl from "~/styles/routes/root/root.css";
import Navbar, { links as navbarLinks } from "./components/navbar/navbar";

export const links: LinksFunction = () => {
  return [...navbarLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "Mony" };
};

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export const CatchBoundary = ClerkCatchBoundary();

function App() {
  return (
    <html lang="en-NZ">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
