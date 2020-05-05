import { BlogSummary } from "./../../src/models/blog";
import { getSortedPostsData } from "../../src/utils/blogs";
import { NextApiResponse, NextApiRequest } from "next";
import { ListResponse } from "../../src/api/types";

require.context("../../data/blogs", true, /\.md$/);

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ListResponse<BlogSummary>>
) => {
  const categories = req.query.categories;

  let blogs = getSortedPostsData();
  if (categories) {
    blogs = blogs.filter((blog) =>
      blog.categories.some((category) => categories.includes(category))
    );
  }
  res.status(200).json({ data: blogs });
};

export default handler;
