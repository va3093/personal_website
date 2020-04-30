import React, { ReactElement } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, ButtonBase } from "@material-ui/core";
import { BlogSummary } from "../../models/blog";
import moment from "moment";
import BlogSubText from "./BlogSubText";
import CategoryList from "./CategoryList";
import BlogContent from "./BlogContent";
import { useRouter } from "next/router";
import { useNavigator } from "../../utils/navigation";

export interface Props {
  blogSummary: BlogSummary;
}

interface StyleProps {
  heroImageUrl?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      cursor: "pointer",
      width: "100%",
    },
    buttonBase: {
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

const BlogSummaryComponent: React.FC<Props> = ({ blogSummary }) => {
  const classes = useStyles({ heroImageUrl: blogSummary.heroImageUrl });
  const { push } = useNavigator();
  const [elevation, setElevation] = React.useState(1);

  return (
    <Box m={2} display="flex">
      <ButtonBase
        className={classes.buttonBase}
        onClick={() => {
          push({
            id: blogSummary.id,
            path: `/blog/${blogSummary.id}`,
            displayName: blogSummary.title,
          });
        }}
        component="div"
        focusRipple
      >
        <Paper
          className={classes.paper}
          elevation={elevation}
          onMouseOver={() => setElevation(5)}
          onMouseLeave={() => setElevation(1)}
        >
          <Box display="flex" flexDirection="column">
            {blogSummary.heroImageUrl && (
              <Box className={classes.heroImage}></Box>
            )}
            <Box px={2} py={3}>
              <Typography variant="h4">{blogSummary.title}</Typography>
            </Box>
            <Box mx={2}>{separator()}</Box>
            <Box m={2}>
              <BlogSubText>
                {moment(blogSummary.createdAt).format("D MMM YYYY")}
              </BlogSubText>
              <CategoryList categories={blogSummary.categories}></CategoryList>
              <BlogContent content={blogSummary.summary} />
            </Box>
          </Box>
        </Paper>
      </ButtonBase>
    </Box>
  );
};

export default BlogSummaryComponent;
