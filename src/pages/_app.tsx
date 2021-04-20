import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";
import "../styles/tailwind.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
