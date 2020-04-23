import {
  ModelIndexItem,
  BlogState,
  BlogActions,
  SetBlogsListAction,
  UpdateBlogAction,
} from "./types";
import { createReducer } from "typesafe-actions";
import { Blog } from "../models/blog";

// Actions

export const SET_BLOGS_LIST = "SET_BLOGS_LIST";
export type SET_BLOGS_LIST = typeof SET_BLOGS_LIST;

export const setBlogsList = (
  listId: string,
  blogs: Blog[]
): SetBlogsListAction => ({
  type: SET_BLOGS_LIST,
  payload: { blogs, listId },
});

export const UPDATE_BLOG = "UPDATE_BLOG";
export type UPDATE_BLOG = typeof UPDATE_BLOG;

export const updateBlog = (blog: Blog): UpdateBlogAction => ({
  type: UPDATE_BLOG,
  payload: blog,
});

// reducer

export const initialState: BlogState = {
  items: {},
  lists: {},
};

export const reducer = createReducer<BlogState, BlogActions>(
  initialState
).handleType(SET_BLOGS_LIST, (state, action) => {
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
        {} as Record<string, ModelIndexItem<Blog>>
      ),
    },
  };
});

export const getBlogsFromStore = (
  state: BlogState,
  listId: string
): Blog[] | void => {
  const list = state.lists[listId];
  if (list) {
    return list.items.map((itemId) => state.items[itemId].item);
  }
};
