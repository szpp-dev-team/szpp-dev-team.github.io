<script setup lang="ts">
import ArticleCardGrid from "@/components/organisms/ArticleCardGrid.vue";
import PageSet from "@/modules/PageSet";
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
const articles = computed(() => PageSet.filterByPathPrefix(currentRoute.path));

useHead({
  meta: [
    {
      name: "description",
      content: `SZPP の${currentRoute.meta.title}: ${articles.value
        .map((e) => (e.meta.title ?? "") as string)
        .join(" / ")}`,
    },
  ],
});
</script>

<template>
  <main>
    <section>
      <h1>{{ $route.meta.title }}</h1>
      <ArticleCardGrid :articles="articles" />
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  padding: 0.5rem 0;
}
h1 {
  color: var(--c-primary-dark);
  border-bottom: 4px solid var(--c-primary-dark);
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 0;
}
</style>
