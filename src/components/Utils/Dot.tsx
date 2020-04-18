import React from "react";
import { Box } from "@material-ui/core";
import { ReactElement } from "react";

export default function Dot(): ReactElement {
  return (
    <Box
      width="5px"
      height="5px"
      bgcolor="primary.main"
      borderRadius="50%"
    ></Box>
  );
}
