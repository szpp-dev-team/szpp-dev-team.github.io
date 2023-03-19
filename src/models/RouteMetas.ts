import { RouteRecordRaw } from "vue-router";

export type ArticleRouteMeta = {
  layout: string;
  title?: string;
  description?: string;
  eyecatch?: string;
  postedAt?: string;
  lastUpdatedAt?: string;
};

export type ArticleRouteRecord = RouteRecordRaw & { meta: ArticleRouteMeta };
