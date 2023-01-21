import React, { Fragment } from "react";
import NavItems from "./NavItems";
import classes from "./Nav.module.scss";
import { useRouter } from "next/router";
import { type AppProps } from "next/app";
import Dropdown from "../Dropdown/Dropdown";

const navItems = [
  {
    id: "n1",
    title: "Home",
    href: "/",
  },
  {
    id: "n2",
    title: "About",
    href: "/about",
  },
  {
    id: "n3",
    title: "Documentation",
    href: "/documentation",
  },
];

interface NavProps {
  providers: AppProps;
}

const Nav: React.FC<NavProps> = (props) => {
  const { pathname } = useRouter();
  return (
    <Fragment>
      <nav className={classes.navBar}>
        <div className={classes.navContent}>
          <h1 className={classes.navLogo}>V a l i d s</h1>
          <ul className={classes.itemList}>
            {navItems.map((items) => {
              const activeTab = pathname === items.href;
              return (
                <NavItems
                  key={items.id}
                  title={items.title}
                  id={items.id}
                  href={items.href}
                  activeTab={activeTab}
                />
              );
            })}
          </ul>
        </div>
        <div className={classes.navProfile}>
          <h1 className={classes.userName}>Taj Longhurst</h1>
          <div className={classes.userImg}></div>
          <Dropdown providers={props.providers} />
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
