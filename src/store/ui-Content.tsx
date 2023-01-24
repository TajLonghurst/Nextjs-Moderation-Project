import React, { createContext, useState } from "react";

const UiContentContext = createContext({
  dropdownState: false,
  mobileNavState: false,
  registerState: false,
  dropdownHandler: () => {},
  mobileNavhandler: () => {},
  registerbtnHandler: () => {},
});

export const UiContentContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [mobileNavIsActive, setmMbileNavIsActive] = useState(false);
  const [registerIsActive, setRegisterBtn] = useState(false);

  const dropdownhandler = () => {
    setDropdownActive((prevState) => !prevState);
  };

  const mobileNavhandler = () => {
    setmMbileNavIsActive((prevState) => !prevState);
  };

  const registerbtnHandler = () => {
    setRegisterBtn((prevState) => !prevState);
  };

  const context = {
    dropdownState: dropdownActive,
    registerState: registerIsActive,
    mobileNavState: mobileNavIsActive,
    registerbtnHandler: registerbtnHandler,
    dropdownHandler: dropdownhandler,
    mobileNavhandler: mobileNavhandler,
  };
  return <UiContentContext.Provider value={context}>{props.children}</UiContentContext.Provider>;
};

export default UiContentContext;
