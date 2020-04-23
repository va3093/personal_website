import { fetchRawContent } from "./index";
import { setBlogSummaryList } from "./../store/blogSummary";
import { BlogSummary, Blog } from "./../models/blog";
import { ThunkResult } from "../store/types";
import blogSummaries from "../data/blogSummaries";
import { updateBlog } from "../store/blog";
import { getSortedPostsData, getBlogPostFromFile } from "../utils/blogs";

export const fetchBlogSummaries = (
  listId: string
): ThunkResult<Promise<BlogSummary[]>> => {
  return (dispatch) =>
    new Promise<BlogSummary[]>((resolve) => {
      resolve(getSortedPostsData());
    }).then((blogs) => {
      dispatch(setBlogSummaryList(listId, blogs));
      return blogs;
    });
};

export const fetchBlogContent = (
  blogId: string
): ThunkResult<Promise<Blog | undefined>> => {
  return (dispatch) =>
    new Promise<Blog>((resolve) => {
      const blog = getBlogPostFromFile(blogId);
      if (blog) {
        dispatch(updateBlog(blog));
      }
      resolve(blog);
    });
};
