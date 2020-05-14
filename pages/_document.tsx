import Document from "next/document";
import { DocumentContext } from "next/document";
import { Head } from "next/document";
import { Html } from "next/document";
import { Main } from "next/document";
import { NextScript } from "next/document";
import React from "react";

// This file is required to customize the root html element.
// In our case we need to set a lang attribute for all pages.
export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
