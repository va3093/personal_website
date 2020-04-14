import React, { ReactElement } from "react";
import { Box, Link } from "@material-ui/core";
import PageWithNavBar from "../components/Navigation/PageWithNavBar";
import Twitter from "@material-ui/icons/Twitter";

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
      >
        <Box display="flex" color="white" fontSize="28px">
          <Box mx={2} mt={0.5} color="primary.main">
            <Twitter fontSize="large" />
          </Box>
          <Link href="https://twitter.com/wilhelmvdwalt" color="inherit">
            @wilhelmvdwalt
          </Link>
        </Box>
      </Box>
    </PageWithNavBar>
  );
}

export default ContactPage;
