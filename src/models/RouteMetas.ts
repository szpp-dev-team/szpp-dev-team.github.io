import { RouteLocationNormalizedLoaded } from "vue-router";

export type RouteMeta = {
  title?: string;
  description?: string;
};

export type RouteRecord = RouteLocationNormalizedLoaded & { meta: RouteMeta };
