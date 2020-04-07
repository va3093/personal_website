import "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  base: {
    borderRadius: "50%",
    width: "100px",
  },
}));

export default function ProfilePic() {
  const classes = useStyles();
  return <img className={classes.base} src="profile.png" />;
}
