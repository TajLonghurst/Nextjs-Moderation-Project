import React from "react";
import Section from "../Layout/Section";
import H1 from "../UI/H1/H1";
import classes from "./Questions.module.scss";
import QuestionsBlur from "../UI/Svgs/QuestionsBlur";
import H2 from "../UI/H2/H2";
import P from "../UI/P/P";

const Questions = () => {
  return (
    <Section>
      <div className={classes.container}>
        <div className={classes.headerBody}>
          {/* <QuestionsBlur /> */}
          <H1>
            Frequently asked <span className={classes.textHighlightOne}>questions</span>
          </H1>
        </div>
        <div className={classes.row_top}>
          <div className={classes.col_left}>
            <H2>Will my grandma be able to use your product ?</H2>
            <P>
              Unfortunately no, Our services are specify targeted at web developers who are looking
              to upgrade there moderation game with the boost of AI. Unless your grandma has an
              understanding of web development, There's not much we can do sadly.
            </P>
          </div>
          <div className={classes.row_bottom}>
            <div className={classes.col_right}>
              <H2>Can your AI help me with my math homework ?</H2>
              <P>
                No, our service Is designed in a way to moderate content like posts, comments or any
                social media related sharing capability's. By flagging any harmful content, then
                giving you the chance regulated it accordingly. So our AI model sucks at doing math
                as it was not trained to do that.
              </P>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Questions;
