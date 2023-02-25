import React, { Fragment } from "react";
import { type GetServerSideProps } from "next";
import AboutUs from "../components/About/AboutUs";
import Head from "next/head";

interface AboutProps {}

const about: React.FC<AboutProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>VALIDS | About</title>
        <meta name="description" content="Valids About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
