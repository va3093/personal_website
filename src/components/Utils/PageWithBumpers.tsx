import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DARK_NAVY, OFF_WHITE } from "../../theme";
import { ReactNode } from "react";
import { Media } from "../../utils/responsive";

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
  leftBumber?: ReactElement;
  rightBumber?: ReactElement;
  bumperItemWidth: number | string;
  backgroundColor?: "light" | "dark";
}

export default function PageWithBumpers(props: Props): ReactElement {
  const classes = useStyles({
    bgColor: props.backgroundColor === "light" ? OFF_WHITE : DARK_NAVY,
  });

  return (
    <>
      <Box display="flex" className={classes.page}>
        <Media greaterThan="lg">
          <>
            <Box flexGrow={3}></Box>

            {props.leftBumber ? (
              <Box
                display="flex"
                alignItems="center"
                top="0"
                position="sticky"
                height="100vh"
              >
                {props.leftBumber}
              </Box>
            ) : (
              <Box width={props.bumperItemWidth}></Box>
            )}
          </>
        </Media>
        {/* <Box width={MENU_WIDTH}></Box> */}
        <Box width="100%" maxWidth="1300px" flexGrow={2}>
          {props.children}
        </Box>
        <Media greaterThan="lg">
          <>
            {props.rightBumber ? (
              <Box
                display="flex"
                alignItems="center"
                top="0"
                position="sticky"
                height="100vh"
              >
                {props.rightBumber}
              </Box>
            ) : (
              <Box width={props.bumperItemWidth}></Box>
            )}

            <Box flexGrow={3}></Box>
          </>
        </Media>
      </Box>
    </>
  );
}
