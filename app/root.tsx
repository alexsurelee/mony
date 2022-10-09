import type { LinksFunction, MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";

import favicon from "public/favicon.svg"
import stylesUrl from "app/styles/routes/root/root.css";
import { Navbar, links as navbarLinks } from "./components/navbar/Navbar";

export const links: LinksFunction = () => {
  return [...navbarLinks(), { rel: "stylesheet", href: stylesUrl }, {rel: "icon", href: favicon, type: "image/x-icon"}];
};

export const meta: MetaFunction = () => {
  return { title: "Mony" };
};

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(args, { loadUser: true });

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
