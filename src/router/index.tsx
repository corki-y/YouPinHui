import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import router, { Route } from "./config";
import { ReactNode } from "react";

const Router = () => {
  const whiteLazy = ["/"]; // 无需懒加载的路由
  // 懒加载处理
  const syncRouter = (routes: Array<Route>): RouteObject[] => {
    let routeList: RouteObject[] = [];
    // 此处还可以对路由进行一些配置，比如权限等等
    routes.forEach((route) => {
      let element;
      if (whiteLazy.includes(route.path)) {
        element = route.element as ReactNode;
      } else {
        const Lazy = route.element as React.LazyExoticComponent<any>;
        element = <Lazy />;
      }
      routeList.push({
        path: route.path,
        element,
        children: route.children && syncRouter(route.children),
      });
    });
    return routeList;
  };

  return useRoutes(syncRouter(router));
};

export default Router;
