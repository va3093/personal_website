import { BlogsSummaryValidator, BlogSummary, Blog } from "./../models/blog";
import { validateJsonSync } from "./json";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as t from "io-ts";

const postsDirectory = path.join(process.cwd(), "public/blogs");

export function getBlogPostFromFile(blogId: string): Blog | undefined {
  const fullPath = path.join(postsDirectory, `${blogId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  matterResult.data.id = blogId;
  try {
    const blogSummary = validateJsonSync(
      BlogsSummaryValidator,
      matterResult.data
    );
    return {
      ...blogSummary,
      content: matterResult.content,
    };
  } catch (e) {
    return;
  }
}

export function getSortedPostsData(): BlogSummary[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    matterResult.data.id = id;

    // Parse the Meta data
    const blogSummary = validateJsonSync(
      BlogsSummaryValidator,
      matterResult.data
    );
    // Combine the data with the id
    return blogSummary;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
