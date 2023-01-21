import React from "react";
import classes from "./Button.module.scss";

interface DropdownProps {
  children: React.ReactNode;
  onClick?: () => {};
}

const Button: React.FC<DropdownProps> = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
