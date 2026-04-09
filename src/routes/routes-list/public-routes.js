import Apps from "../../pages/Apps";
import B2B from "../../pages/B2B";
import Build from "../../pages/Build";
import Build_1 from "../../pages/service_detail/Build_1";
import Home from "../../pages/Home";
import Migrate from "../../pages/Migrate";
import Optimize from "../../pages/Optimize";
import POS from "../../pages/Pox";
import Migrate_1 from "../../pages/service_detail/Migrate_1";

export const publicRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/build",
    element: Build,
  },
  {
    path: "/migrate",
    element: Migrate,
  },
  {
    path: "/optimize",
    element: Optimize,
  },
  {
    path: "/apps",
    element: Apps,
  },
  {
    path: "/b2b",
    element: B2B,
  },
  {
    path: "/pos",
    element: POS,
  },
  {
    path: "/pages/build_1",
    element: Build_1,
  },
  {
    path: "/pages/migrate_1",
    element: Migrate_1,
  },
];
