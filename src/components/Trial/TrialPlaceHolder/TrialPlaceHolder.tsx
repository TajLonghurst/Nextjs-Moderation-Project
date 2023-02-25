import React, { useState } from "react";
import classes from "./TrialPlaceHolder.module.scss";
import Section from "../../Layout/Section";
import H2 from "../../UI/H2/H2";
import P from "../../UI/P/P";
import Button from "../../UI/Button/Button";
import TrialDropdown from "./TrialDropdown";

const TrialPlaceHolder = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const btnClickHandler = () => {
    setDropdownActive((prevSate) => !prevSate);
  };
  return (
    <Section>
      <div className={classes.row}>
        <div className={classes.col_left}>
          <H2>Please Login or Signup</H2>
          <P>To access our trial service it is required that you sign up or login in. </P>
          <div className={classes.register}>
            <Button
              onClick={btnClickHandler}
              style={{ fontSize: "18px" }}
              type={"button"}
              icon={"arrow"}
            >
              Sign Up Or Login
            </Button>
            <div className={classes.drop}>{dropdownActive && <TrialDropdown />}</div>
          </div>
        </div>
        <div className={classes.col_right}>
          <ul className={classes.list}>
            <li className={classes.item}></li>
            <li className={classes.item}></li>
            <li className={classes.item}></li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default TrialPlaceHolder;
