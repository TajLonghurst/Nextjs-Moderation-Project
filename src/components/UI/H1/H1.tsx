import React from "react";
import classes from "./H1.module.scss";

interface H1Props {
  children: React.ReactNode;
}

const H1: React.FC<H1Props> = (props) => {
  return <h1 className={classes.header}>{props.children}</h1>;
};

export default H1;
