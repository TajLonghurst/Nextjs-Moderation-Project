import React, { Fragment, useContext } from "react";
import classes from "./Overlay.module.scss";
import { OverlayProps } from "./OverlayModal";
import UiContentContext from "../../../store/ui-Content";

const Overlay: React.FC<OverlayProps> = (props) => {
  const uiContextCtx = useContext(UiContentContext);

  return (
    <Fragment>
      {uiContextCtx.dropdownState && (
        <div className={classes.overlay} onClick={props.onClick}></div>
      )}
    </Fragment>
  );
};

export default Overlay;
