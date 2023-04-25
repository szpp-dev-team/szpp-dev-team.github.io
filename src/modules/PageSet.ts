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

  filterByPathPrefix(
    prefix: string,
    opt: { sort: "asc" | "desc" }
  ): SzppRouteRecord[] {
    const res = filterByPathPrefix(pages, prefix);
    const k = opt.sort === "asc" ? -1 : 1;
    res.sort((a, b) => {
      const d1 = new Date((a.meta?.postedAt || 0) as string | number);
      const d2 = new Date((b.meta?.postedAt || 0) as string | number);
      return k * (d2.getTime() - d1.getTime());
    });
    return res;
  },

  /**
   * 投稿日の降順 (=新しい順) で /news/** のページ情報を返す。
   */
  sortedNews(): SzppRouteRecord[] {
    const news = this.filterByPathPrefix("/news", { sort: "desc" });
    return news;
  },

  sortedProducts(): SzppRouteRecord[] {
    const products = this.filterByPathPrefix("/products", { sort: "desc" });
    return products;
  },
} as const;
