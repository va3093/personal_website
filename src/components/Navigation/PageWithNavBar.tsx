import React, { ReactElement } from "react";
import { Box } from "@material-ui/core";
import { ReactNode } from "react";
import Menu, { MENU_WIDTH } from "./Menu";
import { MobileOrTablet } from "../../utils/responsive";
import SliderMenu from "./SliderMenu";
import PageWithBumpers from "../Utils/PageWithBumpers";

interface Props {
  children: ReactNode;
  backgroundColor?: "light" | "dark";
}

export default function PageWithNavBar(props: Props): ReactElement {
  return (
    <>
      <PageWithBumpers
        backgroundColor={props.backgroundColor}
        bumperItemWidth={MENU_WIDTH}
        leftBumber={
          <Menu
            textColor={props.backgroundColor === "light" ? "dark" : "light"}
          />
        }
      >
        {props.children}
      </PageWithBumpers>
      <MobileOrTablet>
        <Box position="fixed" bottom="0" right="0">
          <SliderMenu></SliderMenu>
        </Box>
      </MobileOrTablet>
    </>
  );
}
