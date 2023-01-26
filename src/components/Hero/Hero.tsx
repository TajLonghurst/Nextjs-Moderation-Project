import React from "react";
import Button from "../Button/Button";
import Section from "../Layout/Section";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <Section>
      <div className={classes.hero}>
        <div className={classes.row}>
          <div className={classes.col_7}>
            <div className={classes.homepage}>
              <h2 className={classes.subHeader}>Who are we</h2>
              <h1 className={classes.header}>
                We provide <span className={classes.textHighlightOne}>web</span> monitorization with
                a sprinkle of <span className={classes.textHighlightTwo}>AI</span>
              </h1>
              <p className={classes.introText}>
                This free Paragraph Generator will generate complete paragraphs according to the
                instructions provided by you, so that you can quickly build unique content.
              </p>
              <div className={classes.btnPostion}>
                <Button type="button" size={"large"}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.col_5}>
            <div className={classes.iphone}>
              <div className={classes.iphoneBody}>
                <div className={classes.iphoneContent}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
