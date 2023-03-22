import { ViteSSGOptions as _ } from "vite-ssg"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import * as path from "path";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-md";
import markdownItLinkAttributes from "markdown-it-link-attributes";
import markdownItPrism from "markdown-it-prism";
// import { meta } from "md-powerpack";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || "/",

  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue", "md"],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperComponent: "article-tmpl",
      wrapperClasses: "markdown-wrapper",
      headEnabled: true,
      // builders: [
      //   meta({
      //     routeMetaProps: [
      //       "eyecatch",
      //       "postedAt",
      //       "updatedAt",
      //     ],
      //   }),
      // ],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(markdownItPrism);
        md.use(markdownItLinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        });
      },
    }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    dirStyle: "nested",
  },
});
