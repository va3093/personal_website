import Link from "next/link";
import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DARK_NAVY } from "../../src/theme";
import { ReactNode } from "react";
import Menu, { MENU_WIDTH } from "./Menu";
import { AtLeastDesktop } from "../../utils/responsive";

const useStyles = makeStyles(() => ({
  page: {
    background: `${DARK_NAVY}`,
  },
  text: {
    color: "white",
    maxWidth: "600px",
  },
}));

export default function PageWithNavBar(props: { children: ReactNode }) {
  const classes = useStyles();

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
              <Menu />
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
      </Box>
    </>
  );
}
