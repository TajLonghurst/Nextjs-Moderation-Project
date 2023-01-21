import React, { Fragment, useContext } from "react";
import NavItems from "./NavItems";
import classes from "./Nav.module.scss";
import { useRouter } from "next/router";
import { type AppProps } from "next/app";
import Dropdown from "../Dropdown/Dropdown";
import UiContentContext from "../../store/ui-Content";

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
  const uiContextCtx = useContext(UiContentContext);
  const { pathname } = useRouter();

  const dropdownHander = () => {
    uiContextCtx.dropdownHandler();
  };

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
          <h1 onClick={dropdownHander} className={classes.userName}>
            Taj Longhurst
          </h1>
          <div onClick={dropdownHander} className={classes.userImg}></div>
          <Dropdown providers={props.providers} />
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
