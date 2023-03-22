import { RouteRecordRaw } from "vue-router";

export interface SzppRouteMeta {
  title?: string;
  description?: string;
  eyecatch?: string;
  postedAt?: string;
  updatedAt?: string;
}

export interface SzppRouteRecord extends Omit<RouteRecordRaw, "meta"> {
  meta?: SzppRouteMeta;
}
