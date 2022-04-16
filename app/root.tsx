import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { Link, Links, LiveReload, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { ClerkApp, ClerkCatchBoundary, UserButton } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  Anchor,
  MediaQuery,
  Text,
  Burger,
  Button,
} from "@mantine/core";

import stylesUrl from "~/root.css";
import { useState } from "react";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "KiwiBudget" };
};

export const loader: LoaderFunction = (args) =>
  rootAuthLoader(args, { loadUser: true });

export const CatchBoundary = ClerkCatchBoundary();

function App() {
  const [opened, setOpened] = useState(false);

  const header = (
    <Header height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <Anchor component={Link} to="/" variant="text">
          KiwiBudget
        </Anchor>
        <UserButton />
      </div>
    </Header>
  );

  const navbar = (
    <Navbar
      p="md"
      fixed
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 100, lg: 200 }}
    >
      <Button component={NavLink} fullWidth variant="subtle" to="/budget">
        Budget
      </Button>
      <Button component={NavLink} fullWidth variant="subtle" to="/accounts">
        Accounts
      </Button>
    </Navbar>
  );

  return (
    <html lang="en-NZ">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider withCSSVariables withNormalizeCSS withGlobalStyles>
          <AppShell fixed navbar={navbar} header={header}>
            <Outlet />
          </AppShell>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
