import "styles/reset.css";
import "styles/theme.css";
import "@pathscale/fonts-sansation";
import React, { ReactElement } from "react";
import { AppProps } from "next/app";

export default function App(props: AppProps): ReactElement {
  const { Component, pageProps } = props;

  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
