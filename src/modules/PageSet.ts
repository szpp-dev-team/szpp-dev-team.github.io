import { RouteRecordRaw } from "vue-router";
import { SzppRouteRecord } from "@/models/RouteMetas";
import pages from "~pages";

const filterByPathPrefix = (routes: RouteRecordRaw[], prefix: string) => {
  return routes.filter(
    (r) => r.path !== prefix && r.path.startsWith(prefix)
  ) as SzppRouteRecord[];
};

export default {
  /**
   * 全てのページ情報を返す。
   */
  all(): SzppRouteRecord[] {
    return pages as SzppRouteRecord[];
  },

  filterByPathPrefix(prefix: string): SzppRouteRecord[] {
    return filterByPathPrefix(pages, prefix);
  },

  /**
   * 投稿日の降順 (=新しい順) で /news/** のページ情報を返す。
   */
  news(): SzppRouteRecord[] {
    const news = filterByPathPrefix(pages, "/news");
    news.sort((a, b) => {
      const d1 = new Date((a.meta?.postedAt || 0) as string | number);
      const d2 = new Date((b.meta?.postedAt || 0) as string | number);
      return d2.getTime() - d1.getTime();
    });
    return news;
  },

  products(): SzppRouteRecord[] {
    const products = filterByPathPrefix(pages, "/products");
    return products;
  },
} as const;
