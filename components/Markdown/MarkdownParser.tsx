import styles from "./MarkdownParser.module.css";
import React from "react";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";

const SimpleMarkdown: React.FC<{ content: string }> = (props) => {
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rootRef && rootRef.current) {
      rootRef.current.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block as HTMLElement);
      });
    }
  }, [props.content]);
  return (
    <div ref={rootRef}>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: "h1",
              props: {
                className: styles.h1,
              },
            },
            h2: {
              component: "h2",
              props: {
                className: styles.h2,
              },
            },
            h3: {
              component: "h3",
              props: {
                className: styles.h3,
              },
            },
            p: {
              component: "p",
              props: {
                className: styles.body,
              },
            },
            li: {
              component: "li",
              props: {
                className: styles.listItem,
              },
            },
            strong: {
              component: "span",
              props: {
                className: styles.boldBody,
              },
            },
            a: {
              component: "a",
              props: {
                className: styles.link,
              },
            },
            img: {
              component: "img",
              props: {
                className: styles.image,
              },
            },
            pre: {
              component: "pre",
              props: {
                className: styles.pre,
              },
            },
            code: {
              component: "code",
              props: {
                className: styles.code,
              },
            },
          },
        }}
      >
        {props.content}
      </Markdown>
    </div>
  );
};

export default SimpleMarkdown;
