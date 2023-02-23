import React, { Fragment } from "react";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import UiContentContext from "../../store/ui-Content";
import OverlayModal from "../Modals/Overlay/OverlayModal";
import Scrollbar from "../UI/ScrollBar/ScrollBar";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const uiContextCtx = useContext(UiContentContext);

  const dropdownHander = () => {
    uiContextCtx.dropdownHandler();
  };

  return (
    <Fragment>
      <Nav />
      <OverlayModal onClick={dropdownHander} />
      {/* <Scrollbar /> */}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
