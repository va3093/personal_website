import React, { ReactElement } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { AppContext } from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import withRedux, { MakeStore, ReduxWrapperAppProps } from "next-redux-wrapper";
import { reducer, RootState } from "../store";

const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(reducer, initialState);
};

function MyApp(props: ReduxWrapperAppProps<RootState>): ReactElement {
  const { Component, pageProps, store } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Wilhelm V/D Walt</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<{}> => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
