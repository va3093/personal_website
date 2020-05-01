import { useRouter, Router, NextRouter } from "next/router";
import { RootState } from "./../store/types";
import { useSelector } from "react-redux";

export interface BreadCrumbCollector {
  id: string;
  path: (query: Record<string, string | string[]>) => string;
  displayName: (
    state: RootState,
    query: Record<string, string | string[]>
  ) => string;
}

export interface BreadCrumbItem
  extends Omit<BreadCrumbCollector, "displayName" | "path"> {
  displayName: string;
  path: string;
}

export interface Navigator {
  breadCrumbs: BreadCrumbItem[];
  router: NextRouter;
  currentPath: string;
}

// Define the different routes and their bread crumb paths

const allBlogsBreadcrumb: BreadCrumbCollector[] = [
  { id: "blog", displayName: () => "Blogs", path: () => "/blog" },
];
const blogPostBreadcrumb: BreadCrumbCollector[] = [
  ...allBlogsBreadcrumb,
  {
    id: "blogPost",
    displayName: (state: RootState, { blogId }) => {
      const blogSummary = state.blogSummary.items[String(blogId)];
      const blog = state.blogs.items[String(blogId)];
      return blogSummary
        ? blogSummary.item.title
        : blog
        ? blog.item.title
        : "Blog Post";
    },
    path: (query) => `/blog/${query.blogId}`,
  },
];

const routes: Record<string, BreadCrumbCollector[]> = {
  "/blog": allBlogsBreadcrumb,
  "/blog/[blogId]": blogPostBreadcrumb,
};

/** A React hook that fetches the breadcrumbs for the current route
 *  as well as looking into the redux store for the relevant display names
 * for the breadcrumb
 */
export const useNavigator = (): Navigator => {
  const storeState = useSelector<RootState, RootState>((state) => state);
  const router = useRouter();
  const breadCrumbs: BreadCrumbItem[] =
    (routes[router.route] || []).map((item) => ({
      ...item,
      path: item.path(router.query),
      displayName: item.displayName(storeState, router.query),
    })) || [];

  return {
    breadCrumbs,
    router,
    currentPath: router.pathname,
  };
};