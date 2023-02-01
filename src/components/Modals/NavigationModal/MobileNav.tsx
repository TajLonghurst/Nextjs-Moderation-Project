import Link from "next/link";
import React, { Fragment, useContext } from "react";
import classes from "./MobileNav.module.scss";
import { MobileNavProps } from "./NavigationModal";
import { useRouter } from "next/router";
import UiContentContext from "../../../store/ui-Content";
import Image from "next/image";
import Button from "../../UI/Button/Button";
import Registering from "./Registering/Registering";

const MobileNav: React.FC<MobileNavProps> = (props) => {
  const uiContextCtx = useContext(UiContentContext);

  const mobileNavhandler = () => {
    uiContextCtx.mobileNavhandler();
    // uiContextCtx.registerbtnHandler();
  };

  const signUpbtnHandler = () => {
    uiContextCtx.registerbtnHandler();
  };

  return (
    <Fragment>
      {uiContextCtx.mobileNavState && (
        <div className={classes.overlay}>
          <div className={classes.mobileOverlayNav}>
            <Image
              className={classes.icon}
              onClick={mobileNavhandler}
              src={"/assets/icons/XIcon.svg"}
              alt={"X icon"}
              width={25}
              height={25}
            />
          </div>
          {!uiContextCtx.registerState && (
            <ul className={classes.navList}>
              {props.navItems &&
                props.navItems.map((items) => {
                  return (
                    <li className={classes.navItems} key={items.id}>
                      <Link
                        onClick={mobileNavhandler}
                        className={classes.navLink}
                        href={items.href}
                      >
                        {items.title}
                      </Link>
                    </li>
                  );
                })}
              <li className={classes.navItems}>
                <div className={classes.btnPostion}>
                  <Button onClick={signUpbtnHandler} type={"button"} icon={true}>
                    Sign In
                  </Button>
                </div>
              </li>
            </ul>
          )}
          {uiContextCtx.registerState && <Registering onClickBackBtn={signUpbtnHandler} />}
        </div>
      )}
    </Fragment>
  );
};

export default MobileNav;
