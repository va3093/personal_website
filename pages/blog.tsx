import React, { ReactElement } from "react";
import { Box, Typography } from "@material-ui/core";
import PageWithNavBar from "../components/Navigation/PageWithNavBar";

export function ContactPage(): ReactElement {
  return (
    <PageWithNavBar>
      <Box
        width="100%"
        height="100%"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
      >
        <Typography variant="h6">Coming Soon</Typography>
      </Box>
    </PageWithNavBar>
  );
}

export default ContactPage;
