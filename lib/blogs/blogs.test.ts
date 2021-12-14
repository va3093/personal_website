import { getBlogPostFromFile } from "./blogs";

test("Can read blog post from file", () => {
  const blog = getBlogPostFromFile("markdown_tester");
  expect(blog).not.toBeUndefined();
});
