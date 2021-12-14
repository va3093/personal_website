import { BlogSummary } from "lib/blogs/model";
import React from "react";
import styles from "./BlogList.module.css";
import cn from "classnames";
import Link from "next/link";

interface Props {
  blogs: BlogSummary[];
}

const BlogList: React.FC<Props> = (props) => {
  return (
    <div className={styles.blogList}>
      {props.blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <div className={styles.blogContent}>
              <h3 className={cn(styles.blogTitle, styles.underline)}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </h3>
              <div className={styles.tags}>
                <p className={styles.date}>{blog.createdAt}</p>
                {blog.categories.map((category) => (
                  <p key={category} className={styles.tag}>
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
