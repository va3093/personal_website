import React from "react";
import { Box, Typography, Link, makeStyles } from "@material-ui/core";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { Category } from "../../models/category";
import { MENU_WIDTH, Separator } from "../Navigation/Menu";
import { strings } from "../../content";
import Dot from "../Utils/Dot";

export interface Props extends WithRouterProps {
  parentPageId: string;
  categories: Category[];
  textColor?: "light" | "dark";
}
const useStyles = makeStyles(() => ({
  link: {
    cursor: "pointer",
  },
}));

const CategoryMenu: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Box width={MENU_WIDTH} display="flex" flexDirection="row">
      <Box display="flex" alignItems="center">
        {props.categories.length > 0 && <Separator />}
        <Box display="flex" flexDirection="column">
          <Box m={2}>
            <Typography variant="h5">
              {strings.categorySectionDisplayName}
            </Typography>
          </Box>
          {props.categories.map((category) => {
            return (
              <Box
                color={props.textColor === "dark" ? "black" : "white"}
                width="120px"
                my={0.5}
                mx={4}
                key={category.id}
              >
                <Typography variant="body1">
                  <Box display="flex" alignItems="center">
                    <Box mr={2}>
                      <Dot />
                    </Box>
                    <Link
                      href={`/blog?categories=${category.id}`}
                      className={classes.link}
                      color="inherit"
                      style={{
                        textDecoration: (
                          props.router.query.categories || ""
                        ).includes(category.id)
                          ? "underline"
                          : "none",
                      }}
                    >
                      {category.displayName}
                    </Link>
                  </Box>
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(CategoryMenu);
