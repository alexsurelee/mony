import {
  Link,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import type { LinksFunction } from "remix";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  Anchor,
} from "@mantine/core";

import stylesUrl from "~/root.css";
import NavBar, { links as navBarLinks } from "./components/NavBar/NavBar";

export const links: LinksFunction = () => {
  return [...navBarLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "KiwiBudget" };
};

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(args, { loadUser: true });

export const CatchBoundary = ClerkCatchBoundary();

function App() {
  return (
    <MantineProvider withCSSVariables withNormalizeCSS withGlobalStyles>
      <html lang="en-NZ">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <AppShell
            header={
              <Header height={60} p="xs">
                <Anchor component={Link} to="/">
                  KiwiBudget
                </Anchor>
                <Anchor component={NavLink} to="/budget">
                  Budget
                </Anchor>
                <Anchor component={NavLink} to="/accounts">
                  Accounts
                </Anchor>
              </Header>
            }
          >
            <Outlet />
          </AppShell>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}

export default ClerkApp(App);
