import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";
import {
  CONTENT_FONT,
  CONTENT_FONT_SIZE_BODY1,
  CONTENT_FONT_WEIGHT_BODY1,
  CONTENT_LINE_HEIGHT_BODY1,
} from "../../theme";

export interface Props {
  children: ReactNode;
}

const BlogContent: React.FC<Props> = (props) => {
  return (
    <Box
      fontFamily={CONTENT_FONT}
      fontWeight={CONTENT_FONT_WEIGHT_BODY1}
      fontSize={CONTENT_FONT_SIZE_BODY1}
      lineHeight={CONTENT_LINE_HEIGHT_BODY1}
    >
      {props.children}
    </Box>
  );
};

export default BlogContent;
