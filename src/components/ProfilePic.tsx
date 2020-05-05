import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  base: {
    borderRadius: "50%",
  },
}));

interface Props {
  size: number;
}

export default function ProfilePic(props: Props): ReactElement {
  const classes = useStyles();
  return <img className={classes.base} width={props.size} src="/profile.png" />;
}
