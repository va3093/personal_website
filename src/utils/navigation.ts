import { useRouter } from "next/router";
import {
  BreadCrumbPathItem,
  addToBreadCrumbs,
  popBreadCrumbs,
} from "./../store/navigation";
import { RootState } from "./../store/types";
import { useSelector, useDispatch } from "react-redux";

export interface Navigator {
  breadCrumbs: BreadCrumbPathItem[];
  push: (pathItem: BreadCrumbPathItem) => void;
  pop: () => void;
  currentPath: string;
}

export const useNavigator = (): Navigator => {
  const breadCrumbs = useSelector<RootState, BreadCrumbPathItem[]>(
    (state) => state.navigation.breadCrumbs
  );
  const dispatch = useDispatch();
  const router = useRouter();
  return {
    breadCrumbs,
    push: (breadcrumb) => {
      dispatch(addToBreadCrumbs(breadcrumb));
      router.push(breadcrumb.path);
    },
    pop: () => {
      dispatch(popBreadCrumbs());
      router.push(breadCrumbs[breadCrumbs.length - 2].path);
    },
    currentPath: router.pathname,
  };
};
