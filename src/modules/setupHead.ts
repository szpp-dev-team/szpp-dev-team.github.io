import CONFIG from "@/config";
import { useHead } from "@vueuse/head";
import { ComputedRef, computed } from "vue";

export interface PageMeta {
  path: ComputedRef<string>;
  rawTitle: ComputedRef<string | undefined>;
  description: ComputedRef<string>;
}

export const setupHead = ({ path, rawTitle, description }: PageMeta) => {
  const title = computed(() => {
    if (rawTitle.value == null) {
      // eslint-disable-next-line no-console
      console.error("!!!!!! title is undefined: path:", path.value);
      return "!undefined!";
    }
    if (rawTitle.value === "") {
      return "SZPP - 静岡大学プログラミングサークル";
    }
    return `${rawTitle.value} | SZPP - 静岡大学プログラミングサークル`;
  });

  useHead({
    title,

    meta: [
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: (() => {
          if (path.value === "/") return "website";
          const category = CONFIG.categories.find(
            ({ pathPrefix }) => path.value === pathPrefix
          );
          if (category) return "blog";
          return "article";
        })(),
      },
      {
        property: "og:locale",
        content: "ja_JP",
      },
      {
        property: "og:url",
        content: CONFIG.siteOrigin + path.value,
      },
      {
        property: "og:site_name",
        content: "静岡大学プログラミングサークル SZPP",
      },
      {
        property: "og:image",
        content: `${CONFIG.siteOrigin}/szppy-untransparent.jpeg`,
      },
      {
        property: "twitter:card",
        content: "summary",
      },
      {
        property: "twitter:site",
        content: "@szpp_3776",
      },
    ],
  });
};
