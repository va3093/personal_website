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
