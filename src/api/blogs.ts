import { listResponse } from "./../utils/json";
import { ListResponse } from "./types";
import { fetchJsonContent } from "./index";
import { setBlogSummaryList } from "./../store/blogSummary";
import { BlogSummary, Blog, BlogsSummaryValidator } from "./../models/blog";
import { ThunkResult } from "../store/types";
import { updateBlog } from "../store/blog";
import { getBlogPostFromFile } from "../utils/blogs";
import queryString from "query-string";

export const fetchBlogSummaries = (
  listId: string,
  categories: string[] = []
): ThunkResult<Promise<ListResponse<BlogSummary>>> => {
  const generatedQuery = queryString.stringify(
    {
      categories: categories,
    },
    { arrayFormat: "comma" }
  );
  const query = generatedQuery === "" ? "" : `?${generatedQuery}`;
  return (dispatch) =>
    fetchJsonContent<ListResponse<BlogSummary>>({
      url: `/api/blogs${query}`,
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
