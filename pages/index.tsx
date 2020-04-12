import Link from "next/link";
import Header from "../components/Header";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DARK_NAVY } from "../src/theme";
import ProfilePic from "../components/ProfilePic";
import Dot from "../components/Utils/Dot";
import Menu from "../components/Navigation/Menu";
import PageWithNavBar from "../components/Navigation/PageWithNavBar";

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

const Skills = (props: { skills: string[] }): JSX.Element => {
  const rows = props.skills.reduce((acc, skill, index) => {
    // For the first iteration set the list
    if (index % 3 === 0) {
      return acc.concat([
        [
          <Box width="150px" textAlign="center">
            <Typography>{skill}</Typography>
          </Box>,
        ],
      ]);
    } else {
      acc[acc.length - 1].push(
        <Box>
          <Dot></Dot>
        </Box>,
        <Box width="150px" textAlign="center">
          <Typography>{skill}</Typography>
        </Box>
      );
    }
    return acc;
  }, [] as JSX.Element[][]);
  return (
    <>
      {rows.map((row, index) => {
        return (
          <Box
            key={index}
            display="flex"
            width="100%"
            alignItems="center"
            my={1}
            justifyContent="center"
          >
            {row}
          </Box>
        );
      })}
    </>
  );
};

export default function Index() {
  const classes = useStyles();

  return (
    <PageWithNavBar>
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
      <Box
        mt={4}
        width="100%"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Skills
          skills={[
            "Web",
            "iOS",
            "Backend",
            "Project mgmt",
            "Devops",
            "Design",
            "Engineering mgmt",
          ]}
        />
      </Box>
      <Box my={8} display="flex" justifyContent="center" textAlign="center">
        <Button color="primary" variant="contained">
          Download CV
        </Button>
      </Box>
    </PageWithNavBar>
  );
}
