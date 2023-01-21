import React, { Fragment } from "react";
import Nav from "../components/Nav/Nav";
import { type GetServerSideProps } from "next";
import { type AppProps } from "next/app";
import { getProviders } from "next-auth/react";
import Doc from "../components/Documentaion/Doc";

interface DocumentationProps {
  providers: AppProps;
}

const documentation: React.FC<DocumentationProps> = (props) => {
  return (
    <Fragment>
      <Nav providers={props.providers} />
      <Doc />
    </Fragment>
  );
};

export default documentation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: {
      providers: providers,
    },
  };
};
