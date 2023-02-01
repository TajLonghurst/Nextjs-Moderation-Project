import React, { Fragment, useContext } from "react";
import classes from "./Dropdown.module.scss";
import UiContentContext from "../../../store/ui-Content";
import DropdownItems from "./DropdownItems";

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
  const uiContextCtx = useContext(UiContentContext);

  return (
    <Fragment>
      {uiContextCtx.dropdownState && (
        <div className={classes.dropdownBody}>
          <div className={classes.dropdownContent}>
            <DropdownItems />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dropdown;
