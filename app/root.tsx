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

import { MonyHeader } from "./components/header/MonyHeader";
import { AppShell, MantineProvider } from "@mantine/core";
import { mantineTheme } from "./mantineTheme";

import stylesUrl from "./root.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "Mony" };
};

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(args, { loadUser: true });

export const CatchBoundary = ClerkCatchBoundary();

function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={mantineTheme}>
      <html lang="en-NZ">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <main>
            <AppShell header={<MonyHeader />}>
              <Outlet />
            </AppShell>
          </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}

export default ClerkApp(App);
