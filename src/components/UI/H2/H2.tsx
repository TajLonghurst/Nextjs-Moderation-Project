import React from "react";
import classes from "./H2.module.scss";

interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = (props) => {
  return <h2 className={classes.subHeading}>{props.children}</h2>;
};

export default H2;
