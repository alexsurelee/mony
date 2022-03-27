import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { LinksFunction } from "remix";

import stylesUrl from "~/components/IconButton/IconButton.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export interface IconButtonProps {
  /**
   * The `FontAwesomeIcon` to be used in the button.
   */
  icon: FontAwesomeIconProps["icon"];
  /**
   * The `onClick` method to be used by the HTML `<button />`.
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Class names to be applied to the HTML `<button />`.
   */
  className?: string;
  /**
   * Size of the icon.
   */
  size: FontAwesomeIconProps["size"];
}

export default function IconButton(props: IconButtonProps) {
  const { icon, onClick, className, size } = props;
  return (
    <button className={`icon-button ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
}
