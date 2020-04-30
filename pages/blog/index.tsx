import React, { ReactElement } from "react";
import { Box, makeStyles } from "@material-ui/core";
import PageWithNavBar from "../../src/components/Navigation/PageWithNavBar";
import { useIsDesktopOrDesktopWide } from "../../src/utils/responsive";
import ProfilePic from "../../src/components/ProfilePic";
import { Blog, BlogSummary, stripCategories } from "../../src/models/blog";
import { fetchBlogSummaries } from "../../src/api/blogs";
import { RootState } from "../../src/store/types";
import { connect } from "react-redux";
import { getBlogsFromStore } from "../../src/store/blog";
import { getBlogSummariesFromStore } from "../../src/store/blogSummary";
import blogSummaries from "../../src/data/blogSummaries";
import BlogSummaryComp from "../../src/components/Blogs/BlogSummary";
import PageWithNavBarAndRightMenu from "../../src/components/Navigation/PageWithNavBarAndRightMenu";
import CategoryMenu from "../../src/components/Blogs/CategoryMenu";

const BLOGS_PAGE_ID = "blog_page";

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    maxWidth: "600px",
  },
}));

interface DispatchProps {
  fetchBlogSummaries: () => void;
}

interface StoreProps {
  blogSummaries: BlogSummary[] | void;
}

type Props = DispatchProps & StoreProps;

export function BlogPage({
  blogSummaries = [],
  ...props
}: Props): ReactElement {
  const classes = useStyles();
  const isAtleastDesktop = useIsDesktopOrDesktopWide();

  React.useEffect(() => {
    props.fetchBlogSummaries();
  }, []);

  console.log(blogSummaries);

  return (
    <PageWithNavBarAndRightMenu
      backgroundColor="light"
      rightBumber={
        <CategoryMenu
          textColor="dark"
          categories={stripCategories(blogSummaries)}
        />
      }
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
        <Box minHeight="100vh">
          <Box
            pt={8}
            pb={isAtleastDesktop ? 16 : 8}
            display="flex"
            justifyContent="center"
          >
            <ProfilePic size={isAtleastDesktop ? 100 : 60} />
          </Box>
          <Box maxWidth="900px">
            {blogSummaries.map((blogSummary) => {
              return (
                <Box key={blogSummary.id}>
                  <BlogSummaryComp blogSummary={blogSummary} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </PageWithNavBarAndRightMenu>
  );
}

const mapDispatchToProps: DispatchProps = {
  fetchBlogSummaries: () => fetchBlogSummaries(BLOGS_PAGE_ID),
};

const mapStateToProps = (store: RootState): StoreProps => ({
  blogSummaries: getBlogSummariesFromStore(store.blogSummary, BLOGS_PAGE_ID),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
