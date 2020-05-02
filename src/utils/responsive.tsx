// import React, { ReactElement } from "react";
// import { useMediaQuery } from "react-responsive";

import { createMedia } from "@artsy/fresnel";

export const ResponsiveMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = ResponsiveMedia.createMediaStyle();

export const { MediaContextProvider, Media } = ResponsiveMedia;
