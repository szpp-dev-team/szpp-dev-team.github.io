import { RouteRecordRaw } from 'vue-router';
import pages from '~pages';

const filterByPathPrefix = (routes: RouteRecordRaw[], prefix: string) => {
  return routes.filter(r => r.path !== prefix && r.path.startsWith(prefix));
}

export default {
  /**
   * 全てのページ情報を返す。
   */
  all(): RouteRecordRaw[] {
    return pages;
  },

  /**
   * 投稿日の降順 (=新しい順) で /events/** のページ情報を返す。
   */
  events(): RouteRecordRaw[] {
    const events = filterByPathPrefix(pages, '/events');
    events.sort((a, b) => {
      const d1 = new Date((a.meta?.postedAt || 0) as string | number);
      const d2 = new Date((b.meta?.postedAt || 0) as string | number);
      return d2.getTime() - d1.getTime();
    });
    return events;
  },
  products(): RouteRecordRaw[] {
    const products = filterByPathPrefix(pages,'/products');
    return products;
  }
}
