import "react";
import { Box, Typography, Link } from "@material-ui/core";
import Dot from "../Utils/Dot";

export const MENU_WIDTH = "200px";

const VerticalLine = (props: { height: string }) => {
  return <Box height={props.height} width="2px" bgcolor="primary.main"></Box>;
};

const Separator = () => {
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

const MenuItems = () => {
  const items: { key: string; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "blog", label: "Blog" },
    { key: "contact", label: "Contact" },
  ];
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Box display="flex" flexDirection="column">
      {items.map((item) => {
        return (
          <Box color="white" width="120px" m={2} key={item.key}>
            <Typography variant="h6">
              <Link href="#" onClick={preventDefault} color="inherit">
                {item.label}
              </Link>
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default function Menu() {
  return (
    <Box width={MENU_WIDTH} display="flex" flexDirection="row-reverse">
      <Box color="white" display="flex" alignItems="center">
        <MenuItems />
        <Separator />
      </Box>
    </Box>
  );
}
