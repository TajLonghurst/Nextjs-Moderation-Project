import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../scss/globals.scss";
import Layout from "../components/Layout/Layout";
import { UiContentContextProvider } from "../store/ui-Content";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <UiContentContextProvider>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </UiContentContextProvider>
  );
};

export default api.withTRPC(MyApp);
