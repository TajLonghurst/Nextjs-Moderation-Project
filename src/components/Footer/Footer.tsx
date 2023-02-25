import Image from "next/image";
import React from "react";
import classes from "./Footer.module.scss";

const MEDIA_ICONS = [
  {
    id: 1,
    title: "Behance",
    iconImg: "BehanceIcon",
  },
  {
    id: 2,
    title: "Linkined",
    iconImg: "LinkedinIcon",
  },
  {
    id: 3,
    title: "Instagram",
    iconImg: "InstagramIcon",
  },
  {
    id: 4,
    title: "Twitter",
    iconImg: "TwitterIcon",
  },
  {
    id: 5,
    title: "Dribble",
    iconImg: "DribbbleIcon",
  },
  {
    id: 6,
    title: "Meta",
    iconImg: "MetaIcon",
  },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.row}>
        {MEDIA_ICONS.map((icon) => {
          return (
            <li key={icon.id} className={classes.item}>
              <Image
                className={classes.icon}
                width={25}
                height={25}
                src={`/assets/icons/${icon.iconImg}.svg`}
                title={icon.title}
                alt={"Media Icon"}
              />
            </li>
          );
        })}
      </ul>
      <h1 className={classes.name}>By: Taj Longhurst</h1>
    </footer>
  );
};

export default Footer;
