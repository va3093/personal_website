import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ProfilePic from "../ProfilePic";
import { useNavigator } from "../../utils/navigation";
import { OFF_WHITE } from "../../theme";

type Props = {};

const NAVBAR_HEIGHT = "48px";

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {},
    other: {
      zIndex: 100,
      backgroundColor: OFF_WHITE,
      position: "fixed",
      width: "100vw",
      top: 0,
      height: NAVBAR_HEIGHT,
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
    },
    backButton: {
      flex: 1,
    },
    profilePic: {
      flex: 2,
    },
    rightspace: {
      flex: 1,
    },
  })
);

const MenuBar: React.FC<Props> = () => {
  const classes = useStyles();
  const { goBack } = useNavigator();
  console.log(classes);
  return (
    <>
      {/* spacer */}
      <Box id="spacer" height={NAVBAR_HEIGHT} width="100vw"></Box>
      <div className={classes.other}>
        <Box className={classes.backButton}>
          <IconButton
            onClick={() => {
              goBack();
            }}
          >
            <ArrowBackIos />
          </IconButton>
        </Box>
        <Box
          className={classes.profilePic}
          display="flex"
          justifyContent="center"
        >
          <ProfilePic size={30} />
        </Box>
        <Box className={classes.rightspace}></Box>
      </div>
    </>
  );
};

export default MenuBar;
