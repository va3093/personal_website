import { BlogSummary } from "./../models/blog";
import {
  ModelIndexItem,
  SetBlogSummaryListAction,
  BlogSummaryState,
  BlogSummaryActions,
} from "./types";
import { createReducer } from "typesafe-actions";

// Actions

export const SET_BLOG_SUMMARY_LIST = "SET_BLOG_SUMMARY_LIST";
export type SET_BLOG_SUMMARY_LIST = typeof SET_BLOG_SUMMARY_LIST;

export const setBlogSummaryList = (
  listId: string,
  blogs: BlogSummary[]
): SetBlogSummaryListAction => ({
  type: SET_BLOG_SUMMARY_LIST,
  payload: { blogs, listId },
});

// Types

// reducer

export const initialState: BlogSummaryState = {
  items: {},
  lists: {},
};

export const reducer = createReducer<BlogSummaryState, BlogSummaryActions>(
  initialState
).handleType(SET_BLOG_SUMMARY_LIST, (state, action) => {
  return {
    ...state,
    lists: {
      ...state.lists,
      [action.payload.listId]: {
        items: action.payload.blogs.map((blog) => blog.id),
        fetchedAt: new Date(Date.now()),
      },
    },
    items: {
      ...state.items,
      ...action.payload.blogs.reduce(
        (acc, blog) => ({
          ...acc,
          [blog.id]: { item: blog, updatedAt: new Date(Date.now()) },
        }),
        {} as Record<string, ModelIndexItem<BlogSummary>>
      ),
    },
  };
});

export const getBlogSummariesFromStore = (
  state: BlogSummaryState,
  listId: string
): BlogSummary[] | void => {
  const list = state.lists[listId];
  if (list) {
    return list.items.map((itemId) => state.items[itemId].item);
  }
};
