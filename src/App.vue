<script setup lang="ts">
import { computed } from "vue";
import GlobalNavHeader from "@/components/organisms/GlobalNavHeader.vue";
import PageFooter from "@/components/organisms/PageFooter.vue";
import { useRoute } from "vue-router";
import { RouteRecord } from "./models/RouteMetas";
import { setupHead } from "./modules/setupHead";

const route = useRoute() as RouteRecord;
setupHead({
  path: computed(() => route.path),
  rawTitle: computed(() => route.meta.title),
  description: computed(() => route.meta.description ?? ""),
});
</script>

<template>
  <GlobalNavHeader />
  <router-view />
  <PageFooter />
</template>
