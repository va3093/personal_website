import Link from "next/link";
import Header from "../components/Header";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DARK_NAVY } from "../src/theme";
import ProfilePic from "../components/ProfilePic";

const useStyles = makeStyles(() => ({
  page: {
    background: `${DARK_NAVY}`,
    minHeight: "100vh",
  },
  text: {
    color: "white",
    maxWidth: "600px",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Box pt={8} pb={16} display="flex" justifyContent="center">
        <ProfilePic />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        fontFamily="anton,Roboto,Arial"
        fontSize="100px"
        color="primary.main"
      >
        WELCOME
      </Box>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography className={classes.text} variant="h5">
          I have built and managed modern tech stacks from top to bottom:
        </Typography>
      </Box>
      <Box my={8} display="flex" justifyContent="center" textAlign="center">
        <Button color="primary" variant="contained">
          Download CV
        </Button>
      </Box>
    </div>
  );
}
