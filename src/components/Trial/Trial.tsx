import React from "react";
import Section from "../Layout/Section";
import classes from "./Trial.module.scss";
import H2 from "../UI/H2/H2";
import P from "../UI/P/P";
import TrialComments from "./TrialComments";
import TrialForm from "./TrialForm";
import TrialAdminComments from "./TrialAdminComments";

const Trial = () => {
  return (
    <Section>
      <div className={classes.trial}>
        <div className={classes.row}>
          <div className={classes.col_left}>
            <div className={classes.trialContent}>
              <H2>Preview of our service</H2>
              <P>
                Preview our monitorization services with the form below. When submitting a comment
                It’ll go through our <span className={classes.textHighlightTwo}>AI</span> content
                validation process. Flagging out any harmful content to then be easily picked off by
                moderators.
              </P>
              <TrialForm />
            </div>
            <TrialComments />
          </div>
          <div className={classes.col_right}>
            <TrialAdminComments />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Trial;
