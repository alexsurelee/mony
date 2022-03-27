import { LinksFunction } from "remix";

import stylesUrl from "~/components/Button/Button.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface ButtonProps {
  children: React.ReactChild;
}

export default function Button(props: ButtonProps) {
  return <button className="button">{props.children}</button>;
}
