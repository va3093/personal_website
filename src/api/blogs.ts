import { listResponse } from "./../utils/json";
import { ListResponse } from "./types";
import { fetchRawContent, fetchJsonContent } from "./index";
import { setBlogSummaryList } from "./../store/blogSummary";
import { BlogSummary, Blog, BlogsSummaryValidator } from "./../models/blog";
import { ThunkResult } from "../store/types";
import blogSummaries from "../data/blogSummaries";
import { updateBlog } from "../store/blog";
import { getSortedPostsData, getBlogPostFromFile } from "../utils/blogs";

export const fetchBlogSummaries = (
  listId: string
): ThunkResult<Promise<ListResponse<BlogSummary>>> => {
  return (dispatch) =>
    fetchJsonContent<ListResponse<BlogSummary>>({
      url: "/api/blogs",
      method: "GET",
      parser: listResponse(BlogsSummaryValidator),
    }).then((blogs) => {
      dispatch(setBlogSummaryList(listId, blogs.data));
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
