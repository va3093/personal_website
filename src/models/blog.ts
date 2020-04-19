import { DateType } from "./../api/types";
import * as t from "io-ts";

const BlogValidator = t.type({
  id: t.string,
  content: t.string,
});

export const BlogsSummaryValidator = t.intersection([
  t.type({
    id: t.string,
    title: t.string,
    categories: t.array(t.string),
    summary: t.string,
    createdAt: DateType,
  }),
  t.partial({
    heroImageUrl: t.string,
  }),
]);

export type BlogSummary = t.TypeOf<typeof BlogsSummaryValidator>;

export type Blog = t.TypeOf<typeof BlogValidator>;
