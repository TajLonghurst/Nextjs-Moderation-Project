import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./NavItems.module.scss";
import { motion } from "framer-motion";

interface NavItemsProps {
  id: string;
  title: string;
  href: string;
  activeTab: boolean;
}

const NavItems: React.FC<NavItemsProps> = (props) => {
  const ActiveLink = props.activeTab ? (
    <motion.div layoutId="activeNavTab" className={classes.active} />
  ) : null;

  const activeTextColor = props.activeTab ? classes.colorText : classes.navLink;

  return (
    <Fragment>
      <div className={classes.navItems} id={props.activeTab ? classes.colorActive : undefined}>
        <Link href={props.href}>
          <div className={activeTextColor}>{props.title}</div>
          <div>{ActiveLink}</div>
        </Link>
      </div>
    </Fragment>
  );
};

export default NavItems;
