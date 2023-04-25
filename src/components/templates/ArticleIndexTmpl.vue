<script setup lang="ts">
import ArticleCardGrid from "@/components/organisms/ArticleCardGrid.vue";
import PageSet from "@/modules/PageSet";
import Breadcrumb from "@/models/Breadcrumb";
import { SzppRouteRecord } from "@/models/RouteMetas";
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import BreadcrumbList from "@/components/atoms/BreadcrumbList.vue";

const currentRoute = useRoute() as SzppRouteRecord;
const articles = computed(() =>
  PageSet.filterByPathPrefix(currentRoute.path, { sort: "desc" })
);
const description = computed(() => {
  const x = articles.value
    .map((e) => (e.meta?.title ?? "") as string)
    .join(" / ");
  return `SZPP の${currentRoute.meta?.title ?? ""}: ${x}`;
});

useHead({
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:description",
      content: description,
    },
  ],
});

const breadcrumbs = computed((): Breadcrumb[] => [
  {
    label: currentRoute.meta?.title ?? "",
    href: "#",
  },
]);
</script>

<template>
  <main class="--full-vh --bg-cross-dots-pattern">
    <div class="pane">
      <BreadcrumbList :items="breadcrumbs" class="breadcrumbs" />
      <section>
        <h1>{{ $route.meta.title }}</h1>
        <ArticleCardGrid :articles="articles" />
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 4rem 0;
}
.breadcrumbs {
  padding: 1rem;
}
.pane {
  padding: 0.25rem 0 4rem;
  background: #fff;
  box-shadow: 0 0 8px rgba(0 0 0 / 30%);
  min-height: calc(100vh - var(--height-header) - var(--height-footer) - 8rem);
}
h1 {
  color: var(--c-primary-dark);
  border-bottom: 4px solid var(--c-primary-dark);
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 3rem 0;
}
</style>
