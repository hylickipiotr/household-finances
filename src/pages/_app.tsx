import { IdProvider } from "@radix-ui/react-id";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import arraySupport from "dayjs/plugin/arraySupport";
import utc from "dayjs/plugin/utc";
import { NextPage } from "next";
import { AppProps } from "next/app";
import numeral from "numeral";
import "numeral/locales/pl";
import * as React from "react";
import { client } from "src/lib/urql";
import "src/styles/tailwind.css";
import { Provider as UrqlProvider } from "urql";

numeral.locale("pl");
dayjs.locale("pl");
dayjs.extend(utc);
dayjs.extend(arraySupport);

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <IdProvider>
    <UrqlProvider value={client}>
      <Component {...pageProps} />
    </UrqlProvider>
  </IdProvider>
);

export default App;
