import React, { ReactElement } from "react";
import { Button, Box, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "../components/ProfilePic";
import Dot from "../components/Utils/Dot";
import PageWithNavBar from "../components/Navigation/PageWithNavBar";
import { useIsDesktopOrDesktopWide } from "../utils/responsive";
import { connect } from "react-redux";
import Twitter from "@material-ui/icons/Twitter";

type PageProps = {};

export function ContactPage(): ReactElement {
  return (
    <PageWithNavBar>
      <Box
        width="100%"
        height="100%"
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
