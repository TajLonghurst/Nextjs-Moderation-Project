import React from "react";
import Button from "../Button/Button";
import Section from "../Layout/Section";
import classes from "./Hero.module.scss";
import HeroBackground from "../UI/Svgs/HeroBackground";
import HeroNotification from "../Messages/HeroNotification/HeroNotification";

const FAKE_DATA = [
  {
    id: "1",
    postID: "A9B-JHD2-533",
    status: true,
    reason: "Hate Speech",
  },
  {
    id: "2",
    postID: "A9B-JHD2-533",
    status: false,
    reason: undefined,
  },
  {
    id: "3",
    postID: "A9B-JHD2-533",
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
                <Button type="button" size={"large"} icon={true} style={{ fontSize: "20px" }}>
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
