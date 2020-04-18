import React, { ReactElement } from "react";
import { Box, makeStyles } from "@material-ui/core";
import PageWithNavBar from "../src/components/Navigation/PageWithNavBar";
import { useIsDesktopOrDesktopWide } from "../src/utils/responsive";
import ProfilePic from "../src/components/ProfilePic";
import { Blog } from "../src/models/blog";
import { fetchBlogs } from "../src/api/blogs";
import { RootState } from "../src/store/types";
import { connect } from "react-redux";
import { getBlogsFromStore } from "../src/store/blog";

const BLOGS_PAGE_ID = "blog_page";

const useStyles = makeStyles(() => ({
  text: {
    color: "white",
    maxWidth: "600px",
  },
}));

interface DispatchProps {
  fetchBlogs: () => void;
}

interface StoreProps {
  blogs: Blog[] | void;
}

type Props = DispatchProps & StoreProps;

export function BlogPage(props: Props): ReactElement {
  const classes = useStyles();
  const isAtleastDesktop = useIsDesktopOrDesktopWide();

  React.useEffect(() => {
    console.log("fetching");
    props.fetchBlogs();
  }, []);

  console.log(props.blogs);

  return (
    <PageWithNavBar backgroundColor="light">
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
        </Box>
      </Box>
    </PageWithNavBar>
  );
}

const mapDispatchToProps: DispatchProps = {
    fetchBlogs: () => fetchBlogs(BLOGS_PAGE_ID),
};

const mapStateToProps = (store: RootState): StoreProps => ({
  blogs: getBlogsFromStore(store.blogs, BLOGS_PAGE_ID),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
