import { FC, SyntheticEvent } from "react";
import { Link, To } from "react-router-dom";
import "../../vendor/fonts/fonts.css";
import styles from "./link-button.module.css";
import arrowImgRight from "../../images/Arrow_right.svg";
import arrowImgLeft from "../../images/Arrow_left.svg";
import arrowImgWhite from "../../images/arrow_right_white.svg";
import arrowImgDisabled from "../../images/arrow_right_disabled.svg";
import arrowImgDisabledWhite from "../../images/arrow_right_disabled_white.svg";

export const LinkButton: FC<{
  to?: To;
  type?: "link" | "button";
  round?: boolean;
  color?: boolean;
  colorText?: "white" | "black";
  arrow?: boolean;
  disabled?: boolean;
  direction?: "left" | "right";
  border?: boolean;
  children?: string | null;
  size?: "small" | "medium" | "large" | null;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
}> = ({
  children = "Текст",
  to = "/",
  type = "link",
  round = false,
  disabled = false,
  color = true,
  colorText = "black",
  arrow = true,
  direction = "right",
  size = "medium",
  border = false,
  onClick,
}) => {
  if (!round) {
    direction = "right";
    border = false;
    size = null;
  } else {
    children = null;
    arrow = true;
  }

  const colorStyles = border
    ? `${styles.linkButton_color_transparent}  ${styles.linkButton_border}`
    : styles.linkButton_color_transparent;

  let className = `${styles.linkButton}
    ${styles[`linkButton_type_${round ? "round" : "rect"}`]}
    ${color ? "" : colorStyles}
    ${size ? styles["linkButton_size_" + size] : ""}`;

  let arrowPath = direction === "left" ? arrowImgLeft : arrowImgRight;

  if (colorText === "white") {
    arrowPath = arrowImgWhite;
    className += " " + styles.linkButton_colorText_white;
  }
  if (disabled) {
    if (!round) {
      arrowPath =
        colorText === "white" ? arrowImgDisabledWhite : arrowImgDisabled;
    }
    className += " " + styles.linkButton_disabled;
  }

  const arrowImage = (
    <img
      src={arrowPath}
      alt={
        children ??
        `Кнопка со стрелкой на${direction === "left" ? "лево" : "право"}`
      }
      className={`${
        arrow ? styles.linkButton__arrow : styles.linkButton__arrow_hide
      }`}
    />
  );

  const linkElement = (
    <Link to={to} className={className} onClick={onClick}>
      {children}
      {arrowImage}
    </Link>
  );

  const buttonElement = (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
      {arrowImage}
    </button>
  );

  return type === "link" ? linkElement : buttonElement;
};
