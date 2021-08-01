import dayjs from "dayjs";
import "dayjs/locale/pl";
import { NextPage } from "next";
import { AppProps } from "next/app";
import numeral from "numeral";
import "numeral/locales/pl";
import React from "react";
import { Provider as UrqlProvider } from "urql";
import { client } from "../client/graphql/client";
import "../client/styles/tailwind.css";

numeral.locale("pl");
dayjs.locale("pl");

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <UrqlProvider value={client}>
    <Component {...pageProps} />
  </UrqlProvider>
);

export default App;
