import { LinksFunction } from "remix";

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
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { children, className, onClick } = props;
  return (
    <button onClick={onClick} className={"button" && className}>
      {children}
    </button>
  );
}
