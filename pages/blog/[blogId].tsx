import React from "react";
import { Blog } from "../../src/models/blog";
import Error from "next/error";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Box } from "@material-ui/core";
import PageWithNavBarAndRightMenu from "../../src/components/Navigation/PageWithNavBarAndRightMenu";
import ProfilePic from "../../src/components/ProfilePic";
import { useIsDesktopOrDesktopWide } from "../../src/utils/responsive";
import { getBlogPostFromFile, getSortedPostsData } from "../../src/utils/blogs";
import FullBlog from "../../src/components/Blogs/FullBlog";

export interface Props {
  blog?: Blog;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sortedBlogs = getSortedPostsData();

  // create paths with `slug` param
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
  const isAtleastDesktop = useIsDesktopOrDesktopWide();
  return (
    <>
      {!blog && <Error statusCode={404} />}
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
              <Box
                pt={8}
                pb={isAtleastDesktop ? 16 : 8}
                display="flex"
                justifyContent="center"
              >
                <ProfilePic size={isAtleastDesktop ? 100 : 60} />
              </Box>
              <Box
                mb={8}
                px={isAtleastDesktop ? 8 : 2}
                width="100%"
                maxWidth="900px"
              >
                <FullBlog blog={blog}></FullBlog>
              </Box>
            </Box>
          </Box>
        </PageWithNavBarAndRightMenu>
      )}
    </>
  );
};
export default BlogPost;
