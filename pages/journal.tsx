import React, { ReactElement } from "react";
import { PageHead } from "components/PageHead/PageHead";
import styles from "./index.module.css";
import journalStyles from "./journal.module.css";
import cn from "classnames";
import Editor from "@monaco-editor/react";

const thoughts = ["how are you", "are you there"];

export default function Journal(): ReactElement {
  return (
    <>
      <PageHead title="Wilhelm's site" />
      <div className={cn(styles.page, journalStyles.page)}>
        <h1>Journal</h1>
        <p>{thoughts[new Date().getTime() % thoughts.length]}</p>
        <div className={journalStyles.textWrapper}>
          <Editor
            height="90vh"
            defaultLanguage="markdown"
            defaultValue="// some comment"
            options={{
              lineNumbers: "off",
              minimap: { enabled: false },
              fontSize: 16,
              wordWrap: "on",
              overviewRulerBorder: false,
            }}
          />
        </div>
      </div>
    </>
  );
}
