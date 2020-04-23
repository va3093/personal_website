import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";
import {
  CONTENT_FONT,
  CONTENT_FONT_SIZE_BODY1,
  CONTENT_FONT_WEIGHT_BODY1,
  CONTENT_LINE_HEIGHT_BODY1,
} from "../../theme";
import MarkdownParser from "../../components/Utils/MarkdownParser";

export interface Props {
  content: string;
}

const BlogContent: React.FC<Props> = (props) => {
  return (
    <Box
      fontFamily={CONTENT_FONT}
      fontWeight={CONTENT_FONT_WEIGHT_BODY1}
      fontSize={CONTENT_FONT_SIZE_BODY1}
      lineHeight={CONTENT_LINE_HEIGHT_BODY1}
    >
      <MarkdownParser content={props.content}></MarkdownParser>
    </Box>
  );
};

export default BlogContent;
