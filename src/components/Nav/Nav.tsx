import React, { Fragment, useContext } from "react";
import NavItems from "./NavItems";
import classes from "./Nav.module.scss";
import { useRouter } from "next/router";
import Dropdown from "../UI/Dropdown/Dropdown";
import UiContentContext from "../../store/ui-Content";
import Image from "next/image";
import NavigationModal from "../Modals/NavigationModal/NavigationModal";
import { useSession } from "next-auth/react";
import Button from "../UI/Button/Button";

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
  const { data: userSession } = useSession();
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
      <nav className={classes.nav}>
        <div className={classes.navBar}>
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
              {userSession?.user && (
                <div className={classes.logInOptions}>
                  <h1 onClick={dropdownHander} className={classes.userName}>
                    {userSession?.user?.name}
                  </h1>
                  <div onClick={dropdownHander} className={classes.userImg}></div>
                </div>
              )}
              {!userSession?.user && (
                <div className={classes.logInOptions}>
                  <Button
                    style={{ fontSize: "17px" }}
                    onClick={dropdownHander}
                    type="button"
                    icon={"arrow"}
                  >
                    Sign In
                  </Button>
                  <div onClick={dropdownHander} className={classes.tempImg}></div>
                </div>
              )}

              {uiContextCtx.dropdownState && <Dropdown />}
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
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
