<script setup lang="ts">
import GlobalNavHeader from "@/components/GlobalNavHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();

const pageTitle = computed(() => {
  const rawTitle = currentRoute.meta.title as string | undefined;
  if (rawTitle == null) {
    console.warn("title is undefined: path:", currentRoute.path);
    return "undefined";
  }
  if (rawTitle === "") {
    return "SZPP - 静岡大学プログラミングサークル";
  }
  return rawTitle + " | SZPP - 静岡大学プログラミングサークル";
});

// computed にしないと SPA でページ遷移したときに meta タグが変化しない
const pageDescription = computed(() => {
  return currentRoute.meta.description;
});

const SITE_ORIGIN = "https://szpp-dev-team.github.io";

useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
    {
      property: "og:title",
      content: currentRoute.meta.title || "静岡大学プログラミングサークル SZPP",
    },
    {
      property: "og:description",
      content: pageDescription,
    },
    {
      property: "og:type",
      content: currentRoute.path === "/" ? "website" : "article",
    },
    {
      property: "og:locale",
      content: "ja_JP",
    },
    {
      property: "og:url",
      content: SITE_ORIGIN + currentRoute.path,
    },
    {
      property: "og:site_name",
      content: "静岡大学プログラミングサークル SZPP",
    },
    {
      property: "og:image",
      content: SITE_ORIGIN + "/szpp-logo-untransparent.jpeg",
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
</script>

<template>
  <GlobalNavHeader />
  <router-view />
  <PageFooter />
</template>
