import { setBlogsList } from "./../store/blog";
import { ThunkResult } from "../store/types";
import { Blog } from "../models/blog";

export const fetchBlogs = (listId: string): ThunkResult<Promise<void>> => {
  return (dispatch) =>
    new Promise<Blog[]>((resolve) => {
      setTimeout(() => {
        const blogs: Blog[] = [];
        resolve(blogs);
      }, 2000);
    }).then((blogs) => {
      dispatch(setBlogsList(listId, blogs));
    });
};
