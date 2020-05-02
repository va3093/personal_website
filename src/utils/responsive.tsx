// import React, { ReactElement } from "react";
// import { useMediaQuery } from "react-responsive";

import { createMedia } from "@artsy/fresnel";

export const ResponsiveMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = ResponsiveMedia.createMediaStyle();

export const { MediaContextProvider, Media } = ResponsiveMedia;
