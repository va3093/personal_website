import React, { ReactElement } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";
import { Blog } from "../../models/blog";
import moment from "moment";
import BlogSubText from "./BlogSubText";
import CategoryList from "./CategoryList";
import BlogContent from "./BlogContent";

export interface Props {
  blog: Blog;
}

interface StyleProps {
  heroImageUrl?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: "100%",
    },
    heroImage: ({ heroImageUrl }: StyleProps) => ({
      backgroundImage: `url(${heroImageUrl})` || "",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "170px",
    }),
  })
);

const separator = (): ReactElement => {
  return <Box height="1px" bgcolor="text.secondary"></Box>;
};

const FullBlog: React.FC<Props> = ({ blog }) => {
  const classes = useStyles({ heroImageUrl: blog.heroImageUrl });

  return (
    <Paper className={classes.paper}>
      <Box display="flex" flexDirection="column">
        {blog.heroImageUrl && <Box className={classes.heroImage}></Box>}
        <Box px={2} py={3}>
          <Typography variant="h4">{blog.title}</Typography>
        </Box>
        <Box mx={2}>{separator()}</Box>
        <Box m={2}>
          <BlogSubText>{moment().format("D MMM YYYY")}</BlogSubText>
          <CategoryList categories={blog.categories}></CategoryList>
          <BlogContent content={blog.content} />
        </Box>
      </Box>
    </Paper>
  );
};

export default FullBlog;
