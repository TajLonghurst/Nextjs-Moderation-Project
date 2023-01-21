import React from "react";
import NavItems from "./NavItems";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.navContent}>
        <h1 className={classes.navLogo}>V a l i d s</h1>
        <NavItems />
      </div>

      <div className={classes.navProfile}>
        <h1 className={classes.userName}>Taj Longhurst</h1>
        <div className={classes.userImg}></div>
      </div>
    </nav>
  );
};

export default Nav;
