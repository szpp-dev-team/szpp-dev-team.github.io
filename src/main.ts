import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import Center from "@/components/Center.vue";
import Article from "@/components/Article.vue";
import Date from "@/components/Date.vue";
import VueGtag from "vue-gtag";
import App from "./App.vue";

import "./styles/common.scss";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router }) => {
    app.component("Center", Center);
    app.component("Article", Article);
    app.component("LastUpdatedAt", Date);
    if (
      import.meta.env.MODE === "production" &&
      import.meta.env.VITE_GA_MEASUREMENT_ID
    ) {
      app.use(VueGtag, {
        config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID },
      });
    }
    router.options.scrollBehavior = (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { left: 0, top: 0, behavior: "auto" };
    };
  }
);
