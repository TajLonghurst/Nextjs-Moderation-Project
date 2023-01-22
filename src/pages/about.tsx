import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import { type GetServerSideProps } from "next";
import { type AppProps } from "next/app";
import AboutUs from "../components/About/AboutUs";

interface AboutProps {
  providers: AppProps;
}

const about: React.FC<AboutProps> = (props) => {
  return (
    <Fragment>
      <AboutUs />
    </Fragment>
  );
};

export default about;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
