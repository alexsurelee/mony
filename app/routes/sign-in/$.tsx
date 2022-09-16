import { SignIn } from "@clerk/remix";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/routes/auth/auth.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function SignInPage() {
  return (
    <div className="auth-wrapper">
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}
