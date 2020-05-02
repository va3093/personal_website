import React, { ReactElement, HTMLAttributes } from "react";
import { Typography, Box, createStyles, makeStyles } from "@material-ui/core";
import Markdown, { compiler } from "markdown-to-jsx";

const H1: React.FC = (props) => (
  <Box my={2}>
    <Typography variant="h4" {...props}>
      {props.children}
    </Typography>
  </Box>
);
const H2: React.FC = (props) => (
  <Box my={2}>
    <Typography variant="h5" {...props}>
      {props.children}
    </Typography>
  </Box>
);
const H3: React.FC = (props) => (
  <Box my={2}>
    <Typography variant="h6" {...props}>
      {props.children}
    </Typography>
  </Box>
);
const Body: React.FC = (props) => (
  <Box
    my={1.5}
    fontFamily={["Montserrat", "futura-pt", "Roboto", "Arial"].join(",")}
    fontSize={16}
    component="p"
    lineHeight="2em"
    marginBottom="1.8em"
  >
    {props.children}
  </Box>
);
const ListItem: React.FC = (props) => (
  <Box my={1.5}>
    <Typography component="li" variant="body1">
      {props.children}
    </Typography>
  </Box>
);
const BoldBody: React.FC = (props) => (
  <Typography display="inline" variant="body1">
    <Box component="span" fontWeight="fontWeightBold">
      {props.children}
    </Box>
  </Typography>
);

const buildToc = (source: string): ReactElement<HTMLAttributes<unknown>>[] => {
  const headings: ReactElement<HTMLAttributes<unknown>>[] = [];
  compiler(source, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createElement(type, props: any, children) {
      if (type === "h1" || type === "h2" || type === "h3") {
        const id = props.id;
        props = {
          ...props,
          id: null,
          className: "toc-" + type,
          onClick: (): void => {
            const target = document.getElementById(id);
            if (target) {
              const yPos =
                target.getBoundingClientRect().top - 80 + window.pageYOffset;
              window.scrollTo({ top: yPos, behavior: "smooth" });
            }
          },
        };
        headings.push(
          <div className={"toc-" + type + "-wrapper"}>
            <li className={"toc-" + type + "-listItem"}>
              <a {...props}>{children}</a>
            </li>
          </div>
        );
      }
      return React.createElement(type, props, children);
    },
  });
  return headings;
};

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      maxWidth: 800,
      width: "100%",
      margin: "0 auto",
    },
    paper: {
      width: "100%",
    },
    link: {
      color: "#006C00",
    },
    logo: {
      width: "150px",
      cursor: "pointer",
    },
  })
);

const SimpleMarkdown: React.FC<{ content: string }> = (props) => {
  const classes = useStyles();
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: H1,
          },
          h2: {
            component: H2,
          },
          h3: {
            component: H3,
          },
          p: {
            component: Body,
          },
          li: {
            component: ListItem,
          },
          strong: {
            component: BoldBody,
          },
          a: {
            component: "a",
            props: {
              className: classes.link,
            },
          },
        },
      }}
    >
      {props.content}
    </Markdown>
  );
};

export default SimpleMarkdown;
