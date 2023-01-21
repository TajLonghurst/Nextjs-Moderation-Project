import React, { Fragment } from "react";
// import Nav from "../Nav/Nav";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Fragment>
      {/* <Nav /> */}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
