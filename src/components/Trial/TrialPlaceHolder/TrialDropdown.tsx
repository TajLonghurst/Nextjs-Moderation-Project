import React from "react";
import DropdownItems from "../../UI/Dropdown/DropdownItems";
import classes from "./TrialDropdown.module.scss";

const TrialDropdown = () => {
  return (
    <div className={classes.dropdownBody}>
      <div className={classes.dropdownContent}>
        <DropdownItems />
      </div>
    </div>
  );
};

export default TrialDropdown;
