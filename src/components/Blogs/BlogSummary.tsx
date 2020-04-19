import React, { ReactElement } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";
import { BlogSummary } from "../../models/blog";
import moment from "moment";
import BlogSubText from "./BlogSubText";
import CategoryList from "./CategoryList";
import BlogContent from "./BlogContent";

export interface Props {
  blogSummary: BlogSummary;
}

const useStyles = makeStyles(() => createStyles({}));

const separator = (): ReactElement => {
  return <Box height="1px" bgcolor="text.secondary"></Box>;
};

const BlogSummaryComponent: React.FC<Props> = ({ blogSummary }) => {
  const classes = useStyles();
  return (
    <Box m={2}>
      <Paper>
        <Box display="flex" flexDirection="column">
          <Box p={2}>
            <Typography variant="h5">{blogSummary.title}</Typography>
          </Box>
          <Box mx={2}>{separator()}</Box>
          <Box m={2}>
            <BlogSubText>{moment().format("D MMM YYYY")}</BlogSubText>
            <CategoryList categories={blogSummary.categories}></CategoryList>
            <BlogContent>{blogSummary.summary}</BlogContent>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogSummaryComponent;
