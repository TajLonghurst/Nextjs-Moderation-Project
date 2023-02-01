import React from "react";
import Button from "../UI/Button/Button";
import Section from "../Layout/Section";
import classes from "./Hero.module.scss";
import HeroBackground from "../UI/Svgs/HeroBackground";
import HeroNotification from "../Messages/HeroNotification/HeroNotification";
import H2 from "../UI/H2/H2";
import H1 from "../UI/H1/H1";
import P from "../UI/P/P";

const FAKE_DATA = [
  {
    id: "1",
    postID: "A9B-JHD2-533",
    status: true,
    reason: "Hate Speech",
  },
  {
    id: "2",
    postID: "CCA-JD52-534",
    status: false,
    reason: undefined,
  },
  {
    id: "3",
    postID: "BVT-JDET-535",
    status: true,
    reason: "Violence",
  },
];

const Hero = () => {
  return (
    <Section>
      <div className={classes.hero}>
        <div className={classes.row}>
          <div className={classes.col_7}>
            <div className={classes.homepage}>
              <H2>Who are we</H2>
              <H1>
                We provide <span className={classes.textHighlightOne}>web</span> monitorization with
                a sprinkle of <span className={classes.textHighlightTwo}>AI</span>
              </H1>
              <P>
                This free Paragraph Generator will generate complete paragraphs according to the
                instructions provided by you, so that you can quickly build unique content.
              </P>
              <div className={classes.btnPostion}>
                <Button type="button" icon={true} style={{ fontSize: "20px" }}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.col_5}>
            <HeroBackground />
            <div className={classes.iphonePostion}>
              <div className={classes.iphone}>
                <div className={classes.iphoneBody}>
                  <ul className={classes.iphoneContent}>
                    {FAKE_DATA.map((items) => {
                      return (
                        <HeroNotification
                          key={items.id}
                          reason={items.reason}
                          status={items.status}
                          postID={items.postID}
                        />
                      );
                    })}
                  </ul>
                  <div className={classes.btn}></div>
                  <p className={classes.btnText}>Remove Content</p>
                  <div className={classes.bg}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
