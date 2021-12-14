import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  robots?: string;
  preview?: boolean;
  screenshot?: string;
}

export const PageHead: React.FC<Props> = (props) => {
  const title = props.title ?? "Dune Analytics";
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={"/favicon.png"} type="image/x-icon" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
    </>
  );
};
