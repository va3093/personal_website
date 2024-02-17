import styles from "./BlogPage.module.css";
import { Blog } from "lib/blogs/model";
import Link from "next/link";
import React from "react";
import MarkdownParser from "components/Markdown/MarkdownParser";
import Head from "next/head";

export interface Props {
  blog: Blog;
}

const BlogPage: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.3.1/build/styles/stackoverflow-dark.min.css"
        ></link>
      </Head>
      <main className={styles.blogPage}>
        <nav className={styles.nav}>
          <Link href="/">
            <img className={styles.profilePic} src="/profile.png" />
          </Link>
        </nav>
        <article>
          <img src={blog.heroImageUrl} className={styles.heroImage}></img>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <MarkdownParser content={blog.content}></MarkdownParser>
        </article>
      </main>
    </>
  );
};

export default BlogPage;
