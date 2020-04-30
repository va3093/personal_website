import { AllActions } from "./types";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { MakeStore } from "next-redux-wrapper";
import { RootState } from "./types";
import { reducer as blogReducer } from "./blog";
import { reducer as blogSummaryReducer } from "./blogSummary";
import { reducer as navigationReducer } from "./navigation";
import thunk from "redux-thunk";

declare module "typesafe-actions" {
  interface Types {
    RootAction: AllActions;
  }
}

const rootReducer = combineReducers<RootState>({
  blogs: blogReducer,
  blogSummary: blogSummaryReducer,
  navigation: navigationReducer,
});

export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
