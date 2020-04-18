import * as t from "io-ts";

const BlogValidator = t.type({
  id: t.string,
  content: t.string,
});

export type Blog = t.TypeOf<typeof BlogValidator>;
