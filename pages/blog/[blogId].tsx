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
<<<<<<< HEAD
      {blog && (
        <PageWithNavBarAndRightMenu
          backgroundColor="light"
          rightBumber={<Box></Box>}
        >
          <Box
            width="100%"
            height="100%"
            minHeight="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
          >
            <Box
              minHeight="100vh"
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Media greaterThan="sm">
                <Box
                  pt={8}
                  pb={16}
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <ProfilePic size={100} />
                </Box>
              </Media>
              <Box
                mb={8}
                className={classes.blogWrapper}
                width="100%"
                maxWidth="800px"
              >
                <Box my={2}>
                  <BreadCrumbs />
                </Box>
                <FullBlog blog={blog}></FullBlog>
              </Box>
            </Box>
          </Box>
        </PageWithNavBarAndRightMenu>
      )}
=======
      {blog && <BlogPage blog={blog}></BlogPage>}
>>>>>>> new-blogs
    </>
  );
};
export default BlogPost;
