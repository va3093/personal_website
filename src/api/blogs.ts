import { setBlogSummaryList } from "./../store/blogSummary";
import { BlogSummary } from "./../models/blog";
import { ThunkResult } from "../store/types";
import blogSummaries from "../data/blogSummaries";

export const fetchBlogSummaries = (
  listId: string
): ThunkResult<Promise<void>> => {
  return (dispatch) =>
    new Promise<BlogSummary[]>((resolve) => {
      resolve(blogSummaries);
    }).then((blogs) => {
      dispatch(setBlogSummaryList(listId, blogs));
    });
};
