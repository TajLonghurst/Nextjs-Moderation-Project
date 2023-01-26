import React from "react";
import classes from "./Button.module.scss";
import Image from "next/image";

interface DropdownProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  size: "large" | "small" | String;
}

const Button: React.FC<DropdownProps> = (props) => {
  const btnSize = props.size === "large" ? 20 : 16;
  const iconSize = props.size === "large" ? 28 : 23;

  return (
    <button
      className={classes.btn}
      style={{ fontSize: `${btnSize}px` }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
      <Image
        src={`/assets/icons/ArrowRightBlue.svg`}
        alt={"ArrowIcon"}
        width={30}
        height={30}
        className={classes.icon}
        style={{ height: iconSize, width: iconSize }}
      />
    </button>
  );
};

export default Button;
