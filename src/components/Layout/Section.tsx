import React from "react";
import classes from "./Section.module.scss";

const Section: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
