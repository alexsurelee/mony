import { SignUp } from "@clerk/remix";
import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/routes/auth/auth.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function SignUpPage() {
  return (
    <div className="auth-wrapper">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
