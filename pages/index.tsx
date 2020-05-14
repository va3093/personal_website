import React, { ReactElement } from "react";
import { Button, Box, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "../src/components/ProfilePic";
import Dot from "../src/components/Utils/Dot";
import PageWithNavBar from "../src/components/Navigation/PageWithNavBar";
import { connect } from "react-redux";
import { Media } from "../src/utils/responsive";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    color: "white",
    maxWidth: "600px",
  },
  profilePicWrapper: {
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(16),
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(8),
    },
  },
  welcomWrapper: {
    [theme.breakpoints.up("md")]: {
      fontSize: 100,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
  },
}));

const Skills = (props: { skills: string[] }): JSX.Element => {
  const rows = props.skills.reduce((acc, skill, index) => {
    // For the first iteration set the list
    if (index % 3 === 0) {
      return acc.concat([
        [
          <Box key={index} width="150px" textAlign="center">
            <Typography>{skill}</Typography>
          </Box>,
        ],
      ]);
    } else {
      acc[acc.length - 1].push(
        <Box key={index + "dot"}>
          <Dot></Dot>
        </Box>,
        <Box key={index} width="150px" textAlign="center">
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

type PageProps = {};

export function Index(): ReactElement {
  const classes = useStyles();

  return (
    <PageWithNavBar>
      <Box minHeight="100vh">
        <Box
          className={classes.profilePicWrapper}
          pt={8}
          display="flex"
          justifyContent="center"
        >
          <Media lessThan="md">
            <ProfilePic size={60} />
          </Media>
          <Media greaterThan="sm">
            <ProfilePic size={100} />
          </Media>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          fontFamily="anton,Roboto,Arial"
          className={classes.welcomWrapper}
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
          <Button
            component="a"
            color="primary"
            href="/cv.pdf"
            download
            variant="contained"
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </PageWithNavBar>
  );
}



const mapStateToProps = (): {} => {
  return {};
};

export default connect(mapStateToProps, {})(Index);
