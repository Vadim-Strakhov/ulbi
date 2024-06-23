import Event from "@src/pages/Event";
import Login from "@src/pages/Login";
import React from "react";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];
export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];
