import React from "react";
import classes from "./Button.module.scss";
import Image from "next/image";

interface DropdownProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  size: "small" | "large" | string;
  icon: Boolean;
  style?: {};
  iconSize?: number;
}

const Button: React.FC<DropdownProps> = (props) => {
  // const;

  return (
    <button className={classes.btn} style={props.style} type={props.type} onClick={props.onClick}>
      {props.children}
      {props.icon && (
        <Image
          src={`/assets/icons/ArrowRightBlue.svg`}
          alt={"ArrowIcon"}
          width={30}
          height={30}
          className={classes.icon}
          style={{ height: props.iconSize, width: props.iconSize }}
        />
      )}
    </button>
  );
};

export default Button;
