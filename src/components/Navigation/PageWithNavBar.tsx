import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DARK_NAVY, OFF_WHITE } from "../../theme";
import { ReactNode } from "react";
import Menu, { MENU_WIDTH } from "./Menu";
import { AtLeastDesktop, MobileOrTablet } from "../../utils/responsive";
import SliderMenu from "./SliderMenu";

interface StyleProps {
  bgColor: string;
}

const useStyles = makeStyles(() => ({
  page: {
    background: (props: StyleProps): string => props.bgColor,
  },
  text: {
    color: "white",
    maxWidth: "600px",
  },
}));

interface Props {
  children: ReactNode;
  backgroundColor?: "light" | "dark";
}

export default function PageWithNavBar(props: Props): ReactElement {
  const classes = useStyles({
    bgColor: props.backgroundColor === "light" ? OFF_WHITE : DARK_NAVY,
  });

  return (
    <>
      <Box display="flex" className={classes.page}>
        <AtLeastDesktop>
          <>
            <Box flexGrow={3}></Box>
            <Box
              display="flex"
              alignItems="center"
              top="0"
              position="sticky"
              height="100vh"
            >
              <Menu
                textColor={props.backgroundColor === "light" ? "dark" : "light"}
              />
            </Box>
          </>
        </AtLeastDesktop>
        {/* <Box width={MENU_WIDTH}></Box> */}
        <Box width="100%" maxWidth="1300px" flexGrow={2}>
          {props.children}
        </Box>
        <AtLeastDesktop>
          <>
            <Box width={MENU_WIDTH}></Box>
            <Box flexGrow={3}></Box>
          </>
        </AtLeastDesktop>
        <MobileOrTablet>
          <Box position="fixed" bottom="0" right="0">
            <SliderMenu></SliderMenu>
          </Box>
        </MobileOrTablet>
      </Box>
    </>
  );
}
