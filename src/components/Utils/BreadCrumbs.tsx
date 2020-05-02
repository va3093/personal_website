import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Breadcrumbs, Link } from "@material-ui/core";
import { useNavigator, BreadCrumbItem } from "../../utils/navigation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      cursor: "pointer",
      color: theme.palette.text.primary,
      fontSize: 14,
    },
  })
);

// interface StoreProps {}
type Props = {};

export const BreadCrumbs: React.FC<Props> = () => {
  const classes = useStyles();
  const { router, breadCrumbs } = useNavigator();
  const handleBreadcrumbClick = (item: BreadCrumbItem) => (): void => {
    router.push(item.path);
  };
  if (breadCrumbs.length <= 1) {
    return <></>;
  }
  return (
    <Breadcrumbs data-testid="breadcrumb" className={classes.link}>
      {breadCrumbs.map((item: BreadCrumbItem) => {
        return (
          <Link
            key={item.id}
            color="inherit"
            onClick={handleBreadcrumbClick(item)}
          >
            {item.displayName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
