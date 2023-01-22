import React from "react";
import classes from "./Button.module.scss";
import Image from "next/image";

interface DropdownProps {
  children: React.ReactNode;
  onClick?: () => {};
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<DropdownProps> = (props) => {
  return (
    <button className={classes.btn} type={props.type} onClick={props.onClick}>
      {props.children}
      <Image
        src={`/assets/icons/ArrowRightBlue.svg`}
        alt={"ArrowIcon"}
        width={25}
        height={25}
        className={classes.icon}
      />
    </button>
  );
};

export default Button;
