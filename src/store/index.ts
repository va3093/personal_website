import { AllActions } from "./types";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { MakeStore } from "next-redux-wrapper";
import { RootState } from "./types";
import { reducer as blogReducer } from "./blog";
import thunk from "redux-thunk";

declare module "typesafe-actions" {
  interface Types {
    RootAction: AllActions;
  }
}

const rootReducer = combineReducers<RootState>({
  blogs: blogReducer,
});

export const makeStore: MakeStore = (initialState: RootState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
