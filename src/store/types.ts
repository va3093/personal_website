import { Blog } from "./../models/blog";
import { SET_BLOGS_LIST } from "./../store/blog";
import { ThunkAction } from "redux-thunk";

// Blogs

export interface SetBlogsListAction {
  type: SET_BLOGS_LIST;
  payload: {
    blogs: Blog[];
    listId: string;
  };
}

export type BlogActions = SetBlogsListAction;
export type BlogState = {
  items: {
    [id: string]: ModelIndexItem<Blog>;
  };
  lists: Record<string, ModelList>;
};

/** The ModelList is simply a container for a list of resources. It will contain
 *  a list of items or references to items and some metadata about the list.
 */
export interface ModelList {
  items: string[];
  fetchedAt: Date;
}

/** A moodel index item contains the base item along with metdata about the context
 *  in which the item was obtained
 */
export interface ModelIndexItem<T> {
  item: T;
  updatedAt: Date;
}

export interface Action<Type, Payload> {
  type: Type;
  payload: Payload;
}

export type AllActions = BlogActions;
export type AllActionsTypes = BlogActions["type"];

export type RootState = { blogs: BlogState };

declare module "typesafe-actions" {
  interface Types {
    RootAction: AllActions;
  }
}

// Helpers

export type ThunkResult<ResultType> = ThunkAction<
  ResultType,
  RootState,
  {},
  AllActions
>;
