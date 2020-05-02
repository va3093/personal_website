import React, { ReactElement } from "react";
import {
  Box,
  IconButton,
  makeStyles,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import Hamburger from "@material-ui/icons/ViewHeadline";
import CloseIcon from "@material-ui/icons/Close";
import { NavItem, navItems } from "./Menu";
import { useNavigator } from "../../utils/navigation";

const useStyles = makeStyles(() => ({
  animateOpen: {
    transform: "translateX(calc( 48px - 100vw))",
    transition: "0.2s ease-in-out",
  },
  animateClose: {
    transform: "translateX(0)",
    transition: "0.1s ease-in-out",
  },
}));

const tabBarItems = (
  items: NavItem[],
  currentPath: string,
  onClick: (navItem: NavItem) => void
): ReactElement => {
  const elements = items.map((item) => {
    return (
      <ButtonBase
        key={item.key}
        focusRipple
        onClick={(): void => onClick(item)}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={44}
          height={44}
          color={
            currentPath === item.path
              ? "rgba(0, 0, 0, 1)"
              : "rgba(0, 0, 0, 0.5)"
          }
        >
          {item.icon}
          <Typography variant="caption">{item.label}</Typography>
        </Box>
      </ButtonBase>
    );
  });
  return <>{elements}</>;
};

function SliderMenu(): ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);
  const { router, currentPath } = useNavigator();
  const classes = useStyles();
  return (
    <Box
      className={isOpen ? classes.animateOpen : classes.animateClose}
      position="relative"
      right="calc(48px - 100vw)"
      width="100vw"
      bgcolor="secondary.main"
      borderRadius="15px 0 0 15px"
      display="flex"
    >
      <IconButton
        onClick={(): void => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <CloseIcon style={{ color: " white" }} />
        ) : (
          <Hamburger style={{ color: " white" }} />
        )}
      </IconButton>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        width="100%"
      >
        {tabBarItems(navItems, currentPath, (navItem) => {
          router.push(navItem.path);
        })}
      </Box>
    </Box>
  );
}

export default SliderMenu;
