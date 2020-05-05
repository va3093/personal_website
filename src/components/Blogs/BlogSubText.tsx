import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";
import {
  CONTENT_FONT,
  CONTENT_FONT_SIZE_BODY2,
  CONTENT_FONT_WEIGHT_BODY2,
} from "../../theme";

export interface Props {
  children: ReactNode;
}

const BlogSubText: React.FC<Props> = (props) => {
  return (
    <Box
      fontFamily={CONTENT_FONT}
      fontWeight={CONTENT_FONT_WEIGHT_BODY2}
      fontSize={CONTENT_FONT_SIZE_BODY2}
    >
      {props.children}
    </Box>
  );
};

export default BlogSubText;
