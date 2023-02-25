import React, { Fragment } from "react";
import classes from "./Dropdown.module.scss";
import DropdownItems from "./DropdownItems";

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
  return (
    <Fragment>
      <div className={classes.dropdownBody}>
        <div className={classes.dropdownContent}>
          <DropdownItems />
        </div>
      </div>
    </Fragment>
  );
};

export default Dropdown;
