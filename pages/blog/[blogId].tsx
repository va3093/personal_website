import React from "react";
import { Blog } from "../../src/models/blog";
import Error from "next/error";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Box, makeStyles, Theme } from "@material-ui/core";
import PageWithNavBarAndRightMenu from "../../src/components/Navigation/PageWithNavBarAndRightMenu";
import ProfilePic from "../../src/components/ProfilePic";
import { getBlogPostFromFile, getSortedPostsData } from "../../src/utils/blogs";
import FullBlog from "../../src/components/Blogs/FullBlog";
import BreadCrumbs from "../../src/components/Utils/BreadCrumbs";
import { Media } from "../../src/utils/responsive";

export interface Props {
  blog?: Blog;
}

const useStyles = makeStyles((theme: Theme) => ({
  blogWrapper: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

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
  const classes = useStyles();
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
              <Media greaterThan="lg">
                <Box pt={8} pb={16} display="flex" justifyContent="center">
                  <ProfilePic size={100} />
                </Box>
              </Media>
              <Box
                mb={8}
                className={classes.blogWrapper}
                // px={isAtleastDesktop ? 8 : 2}
                width="100%"
                maxWidth="900px"
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
    </>
  );
};
export default BlogPost;
