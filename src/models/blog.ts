import { Category } from "./category";
import { DateType } from "./../api/types";
import * as t from "io-ts";

export const BlogsSummaryValidator = t.intersection([
  t.type({
    id: t.string,
    title: t.string,
    categories: t.array(t.string),
    summary: t.string,
    createdAt: t.string,
  }),
  t.partial({
    heroImageUrl: t.string,
  }),
]);

const BlogValidator = t.intersection([
  t.type({
    content: t.string,
  }),
  BlogsSummaryValidator,
]);

export type BlogSummary = t.TypeOf<typeof BlogsSummaryValidator>;

export type Blog = t.TypeOf<typeof BlogValidator>;

export function stripCategories(blogSummaries: BlogSummary[]): Category[] {
  const result = Array.from(
    new Set(
      blogSummaries.reduce(
        (acc: string[], blog: BlogSummary) => acc.concat(blog.categories),
        []
      )
    )
  ).map((cat) => ({ id: cat, displayName: cat }));
  return result;
}
