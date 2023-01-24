import React, { Fragment, useContext } from "react";
import NavItems from "./NavItems";
import classes from "./Nav.module.scss";
import { useRouter } from "next/router";
import Dropdown from "../Dropdown/Dropdown";
import UiContentContext from "../../store/ui-Content";
import Image from "next/image";
import { NavigationModal } from "../Modals/NavigationModal/NavigationModal";

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

interface NavProps {}

const Nav: React.FC<NavProps> = (props) => {
  const uiContextCtx = useContext(UiContentContext);

  const { pathname } = useRouter();

  const dropdownHander = () => {
    uiContextCtx.dropdownHandler();
  };

  const mobileNavhandler = () => {
    uiContextCtx.mobileNavhandler();
  };

  return (
    <Fragment>
      <nav className={classes.navBar}>
        <div className={classes.navContent}>
          <h1 className={classes.navLogo}>Valids</h1>
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
        <div className={classes.navRightColum}>
          <div className={classes.navProfile}>
            <h1 onClick={dropdownHander} className={classes.userName}>
              Taj Longhurst
            </h1>
            <div onClick={dropdownHander} className={classes.userImg}></div>
            <Dropdown />
          </div>
          <Image
            className={classes.mobileIcon}
            src={"/assets/icons/menuIcon.svg"}
            alt={"failed to load"}
            width={25}
            height={25}
            onClick={mobileNavhandler}
          />
          <NavigationModal navItems={navItems} />
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
