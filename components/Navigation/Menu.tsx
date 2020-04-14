import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import Dot from "../Utils/Dot";
import { ReactElement } from "react";
import Home from "@material-ui/icons/Home";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

export const MENU_WIDTH = "200px";

const VerticalLine = (props: { height: string }): ReactElement => {
  return <Box height={props.height} width="2px" bgcolor="primary.main"></Box>;
};

const Separator = (): ReactElement => {
  return (
    <Box>
      <VerticalLine height="100px" />
      <Box my={2}>
        <Dot />
      </Box>
      <VerticalLine height="100px" />
    </Box>
  );
};

export interface NavItem {
  key: string;
  label: string;
  path: string;
  icon: ReactElement;
}

export const navItems: NavItem[] = [
  { key: "home", path: "/", label: "Home", icon: <Home /> },
  { key: "blog", path: "/blog", label: "Blog", icon: <FormatColorTextIcon /> },
  {
    key: "contact",
    path: "/contact",
    label: "Contact",
    icon: <PermContactCalendarIcon />,
  },
];

const MenuItems = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column">
      {navItems.map((item) => {
        return (
          <Box color="white" width="120px" m={2} key={item.key}>
            <Typography variant="h6">
              <Link href={item.path} color="inherit">
                {item.label}
              </Link>
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default function Menu(): ReactElement {
  return (
    <Box width={MENU_WIDTH} display="flex" flexDirection="row-reverse">
      <Box color="white" display="flex" alignItems="center">
        <MenuItems />
        <Separator />
      </Box>
    </Box>
  );
}
