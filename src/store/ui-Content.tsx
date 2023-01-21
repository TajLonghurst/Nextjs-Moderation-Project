import React, { createContext, useState } from "react";

const UiContentContext = createContext({
  dropdownState: false,
  dropdownHandler: () => {},
});

export const UiContentContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const dropdownhandler = () => {
    setDropdownActive((prevState) => !prevState);
  };

  const context = {
    dropdownState: dropdownActive,
    dropdownHandler: dropdownhandler,
  };
  return <UiContentContext.Provider value={context}>{props.children}</UiContentContext.Provider>;
};

export default UiContentContext;
