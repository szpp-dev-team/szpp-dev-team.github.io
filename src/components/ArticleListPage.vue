<script setup lang="ts">
import ArticleCardGrid from "@/components/ArticleCardGrid.vue";
import { ArticleRouteRecord } from "@/models/RouteMetas";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps<{
  articles: ArticleRouteRecord[];
}>();

useHead({
  meta: [
    {
      name: "description",
      content:
        `SZPP の${route.meta.title}: ` +
        props.articles.map((e) => (e.meta.title ?? "") as string).join(" / "),
    },
  ],
});
</script>

<template>
  <section>
    <h1>{{ $route.meta.title }}</h1>
    <ArticleCardGrid :articles="articles" />
  </section>
</template>

<style scoped lang="scss">
h1 {
  color: var(--c-primary-dark);
  border-bottom: 4px solid var(--c-primary-dark);
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
}
</style>
