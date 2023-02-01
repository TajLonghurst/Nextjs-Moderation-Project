import React from "react";
import classes from "./P.module.scss";

interface PProps {
  children: React.ReactNode;
}

const P: React.FC<PProps> = (props) => {
  return <p className={classes.p}>{props.children}</p>;
};

export default P;
