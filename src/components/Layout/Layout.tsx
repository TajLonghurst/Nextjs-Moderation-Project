import React, { Fragment } from "react";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import UiContentContext from "../../store/ui-Content";
import OverlayModal from "../Modals/Overlay/OverlayModal";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const uiContextCtx = useContext(UiContentContext);

  const dropdownHander = () => {
    uiContextCtx.dropdownHandler();
  };

  return (
    <Fragment>
      <Nav />
      <OverlayModal onClick={dropdownHander} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
