import React from "react";
import { Blog } from "../../src/models/blog";
import Error from "next/error";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { getBlogPostFromFile, getSortedPostsData } from "lib/blogs/blogs";
import BlogPage from "components/Pages/Home/Blog/BlogPage";

export interface Props {
  blog?: Blog;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sortedBlogs = getSortedPostsData();

  const paths = sortedBlogs.map((blogSummary) => `/blog/${blogSummary.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const params = props.params;
  const result = {
    props: {
      blog: params ? getBlogPostFromFile(String(params.blogId)) : undefined,
    },
  };
  return result;
};

const BlogPost: NextPage<Props> = ({ blog }) => {
  return (
    <>
      {!blog && <Error statusCode={404} />}
      {blog && <BlogPage blog={blog}></BlogPage>}
    </>
  );
};
export default BlogPost;
