import React, { ReactElement } from "react";
import { PageHead } from "components/PageHead/PageHead";
import styles from "./index.module.css";
import BlogList from "components/Pages/Home/BlogList/BlogList";
import { GetStaticProps } from "next";
import { BlogSummary } from "lib/blogs/model";
import { getSortedPostsData } from "lib/blogs/blogs";

interface Props {
  blogs: BlogSummary[];
}

export default function Home(props: Props): ReactElement {
  return (
    <>
      <PageHead title="Wilhelm's site" />
      <div className={styles.page}>
        <main className={styles.content}>
          <img className={styles.profilePic} src="/profile.png" />

          <div className={styles.title}>
            <h1>
              Hi, my name is <em>Wilhelm</em>
            </h1>
            <p>
              I predominantly write code for web apps. I occasionally work on cloud infrastructure and manage teams and
              projects. I use this website to share thoughts, ideas and stuff I am working on.
            </p>
          </div>
          <div>
            <h1>More about me</h1>
            <div className={styles.detailsWrapper}>
              <p>
                My career: <a href="">LinkdIn</a>
              </p>
              <p>
                Random Banter: <a href="">Twitter</a>
              </p>
              <p>
                Best way to contact me: <a href="">Twitter</a>
              </p>
            </div>
          </div>
          <div className={styles.blogWrapper}>
            <h1>Blog</h1>
            <BlogList blogs={props.blogs} />
          </div>
        </main>
        ;
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const blogs = getSortedPostsData();
  return {
    props: {
      blogs,
    },
  };
};
