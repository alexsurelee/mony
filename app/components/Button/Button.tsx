import { Link, LinkProps, LinksFunction } from "remix";
import classNames from "classnames";

import stylesUrl from "~/components/Button/Button.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface ButtonProps {
  /**
   * What goes in the button.
   */
  children: React.ReactChild;
  /**
   * Class names to be applied to the HTML `<button />`.
   */
  className?: string;
  /**
   * The `onClick` method to be used by the HTML `<button />`.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: LinkProps["to"];
}

export default function Button(props: ButtonProps) {
  const { children, className, onClick, to } = props;

  const button = (
    <button onClick={onClick} className={classNames("button", className)}>
      {children}
    </button>
  );

  if (to) {
    <Link to={to}>{button}</Link>;
  }
  return button;
}
