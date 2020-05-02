import React, { ReactElement } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import ProfilePic from "../../src/components/ProfilePic";
import { BlogSummary, stripCategories } from "../../src/models/blog";
import { fetchBlogSummaries } from "../../src/api/blogs";
import { RootState } from "../../src/store/types";
import { connect } from "react-redux";
import { getBlogSummariesFromStore } from "../../src/store/blogSummary";
import BlogSummaryComp from "../../src/components/Blogs/BlogSummary";
import PageWithNavBarAndRightMenu from "../../src/components/Navigation/PageWithNavBarAndRightMenu";
import CategoryMenu from "../../src/components/Blogs/CategoryMenu";
import { Media } from "../../src/utils/responsive";

const BLOGS_PAGE_ID = "blog_page";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    color: "white",
    maxWidth: "600px",
  },
  profilePicWrapper: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(16),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0),
    },
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

  React.useEffect(() => {
    props.fetchBlogSummaries();
  }, []);

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
        // minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Box minHeight="100vh">
          <Box
            // pt={8}
            // pb={isAtleastDesktop ? 16 : 8}
            className={classes.profilePicWrapper}
            display="flex"
            justifyContent="center"
          >
            <Media greaterThan="sm">
              <ProfilePic size={100} />
            </Media>
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
