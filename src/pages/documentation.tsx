import React, { Fragment } from "react";
import { type GetServerSideProps } from "next";
import { type AppProps } from "next/app";
import Doc from "../components/Documentaion/Doc";
import Head from "next/head";

interface DocumentationProps {
  providers: AppProps;
}

const documentation: React.FC<DocumentationProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>VALIDS | Documentation</title>
        <meta name="description" content="Valids DocumentationPage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Doc />
    </Fragment>
  );
};

export default documentation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
