import {
  AddToBreadCrumbsAction,
  NavigationState,
  RemoveToBreadCrumbsAction,
  NavigationActions,
} from "./types";
import { createReducer } from "typesafe-actions";

// Actions

export const ADD_TO_BREADCRUMBS = "ADD_TO_BREADCRUMBS";
export type ADD_TO_BREADCRUMBS = typeof ADD_TO_BREADCRUMBS;

export const REMOVE_FROM_BREADCRUMBS = "REMOVE_FROM_BREADCRUMBS";
export type REMOVE_FROM_BREADCRUMBS = typeof REMOVE_FROM_BREADCRUMBS;

export interface BreadCrumbPathItem {
  id: string;
  path: string;
  displayName: string;
}

export const addToBreadCrumbs = (
  pathItem: BreadCrumbPathItem
): AddToBreadCrumbsAction => ({
  type: ADD_TO_BREADCRUMBS,
  payload: pathItem,
});

export const popBreadCrumbs = (): RemoveToBreadCrumbsAction => ({
  type: REMOVE_FROM_BREADCRUMBS,
  payload: null,
});

// reducer

export const initialState: NavigationState = {
  breadCrumbs: [],
};

export const reducer = createReducer<NavigationState, NavigationActions>(
  initialState
)
  .handleType(ADD_TO_BREADCRUMBS, (state, action) => {
    return {
      breadCrumbs: [...state.breadCrumbs, action.payload],
    };
  })
  .handleType(REMOVE_FROM_BREADCRUMBS, (state, action) => {
    return {
      breadCrumbs: [...state.breadCrumbs.slice(-1)],
    };
  });

export const getBreadcrumbs = (
  state: NavigationState
): BreadCrumbPathItem[] => {
  return state.breadCrumbs;
};
