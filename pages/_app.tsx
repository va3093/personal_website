import "styles/reset.css";
import "styles/theme.css";
import "@pathscale/fonts-sansation";
import React, { ReactElement } from "react";
<<<<<<< HEAD
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { Provider } from "react-redux";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { makeStore } from "../src/store";
import { RootState } from "../src/store/types";
import "highlight.js/styles/github.css";
=======
import { AppProps } from "next/app";
>>>>>>> new-blogs

export default function App(props: AppProps): ReactElement {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}
