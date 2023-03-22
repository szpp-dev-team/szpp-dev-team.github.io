import { ViteSSG } from "vite-ssg";
import routes from "virtual:generated-pages";
import ArticleTmpl from "@/components/templates/ArticleTmpl.vue";
import ArticleIndexTmpl from "@/components/templates/ArticleIndexTmpl.vue";
import VueGtag from "vue-gtag";
import App from "./App.vue";

import "./styles/global.scss";

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router }) => {
    app.component("article-tmpl", ArticleTmpl);
    app.component("article-index-tmpl", ArticleIndexTmpl);
    if (
      import.meta.env.MODE === "production" &&
      import.meta.env.VITE_GA_MEASUREMENT_ID
    ) {
      app.use(VueGtag, {
        config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID },
      });
    }

    // eslint-disable-next-line no-param-reassign
    router.options.scrollBehavior = (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { left: 0, top: 0, behavior: "auto" };
    };
  }
);
