import { SET_BLOG_SUMMARY_LIST } from "./blogSummary";
import { Blog, BlogSummary } from "./../models/blog";
import { SET_BLOGS_LIST, UPDATE_BLOG } from "./../store/blog";
import { ThunkAction } from "redux-thunk";

// Blogs

export interface SetBlogsListAction {
  type: SET_BLOGS_LIST;
  payload: {
    blogs: Blog[];
    listId: string;
  };
}

export interface UpdateBlogAction {
  type: UPDATE_BLOG;
  payload: Blog;
}

export type BlogActions = SetBlogsListAction | UpdateBlogAction;
export type BlogState = {
  items: {
    [id: string]: ModelIndexItem<Blog>;
  };
  lists: Record<string, ModelList>;
};

// BlogSummary

export interface SetBlogSummaryListAction {
  type: SET_BLOG_SUMMARY_LIST;
  payload: {
    blogs: BlogSummary[];
    listId: string;
  };
}

export type BlogSummaryActions = SetBlogSummaryListAction;
export type BlogSummaryState = {
  items: {
    [id: string]: ModelIndexItem<BlogSummary>;
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

export type AllActions = BlogActions | BlogSummaryActions;

export type RootState = {
  blogs: BlogState;
  blogSummary: BlogSummaryState;
};

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
