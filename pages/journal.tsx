import React, { ReactElement } from "react";
import { PageHead } from "components/PageHead/PageHead";
import styles from "./index.module.css";
import journalStyles from "./journal.module.css";
import cn from "classnames";

const thoughts = ["Are you progressing towards your primary goals", "What are your primary goals"];

export default function Journal(): ReactElement {
  return (
    <>
      <PageHead title="Wilhelm's site" />
      <div className={cn(styles.page, journalStyles.page)}>
        <h1>Journal</h1>
        <p>{thoughts[new Date().getTime() % thoughts.length]}</p>
        <div className={journalStyles.textWrapper}>
          <textarea />
        </div>
      </div>
    </>
  );
}
