import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/a-propos",
    name: "A Propos",
  },
  {
    id: ncNanoId(),
    href: "/articles",
    name: "Articles",
  },
];
