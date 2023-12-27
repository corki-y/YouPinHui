import Layout from "@/layouts";
import { lazy } from "react";

export interface Route {
  path: string;
  element: React.ReactNode | React.LazyExoticComponent<any>;
  children?: Array<Route>;
}

const router: Array<Route> = [
  {
    path: "/",
    element: <Layout />, // layoutPage 是属于整体内容，不能使用懒加载，否则会出现闪屏问题
    children: [
      {
        path: "/home",
        element: lazy(() => import("@/pages/home")),
      },
      {
        path: "/*",
        element: lazy(() => import("@/layouts/Anomaly")),
      },
    ],
  },
];

export default router;
