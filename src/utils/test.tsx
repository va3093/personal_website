import { RootState } from "./../store/types";
import React, { ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Mocks useRouter
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter(props: {
  route: string;
  pathname: string;
  query: string;
  asPath: string;
}) {
  useRouter.mockImplementation(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
  }));
}

export const basicMount = (
  component: ReactElement,
  storeState?: Partial<RootState>
): RenderResult => {
  mockNextUseRouter({
    route: "/",
    pathname: "/",
    query: "/",
    asPath: "/",
  });
  return render(
    <Provider store={configureStore([])(storeState || {})}>
      {component}
    </Provider>
  );
};
