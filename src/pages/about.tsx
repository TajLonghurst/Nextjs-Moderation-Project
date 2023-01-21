import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import { type GetServerSideProps } from "next";
import { type AppProps } from "next/app";
import { getProviders } from "next-auth/react";
import AboutUs from "../components/About/AboutUs";

interface AboutProps {
  providers: AppProps;
}

const about: React.FC<AboutProps> = (props) => {
  return (
    <Fragment>
      <Nav providers={props.providers} />
      <AboutUs />
    </Fragment>
  );
};

export default about;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: {
      providers: providers,
    },
  };
};
