<script setup lang="ts">
import { computed } from "vue";
import GlobalNavHeader from "@/components/organisms/GlobalNavHeader.vue";
import PageFooter from "@/components/organisms/PageFooter.vue";
import { useRoute } from "vue-router";
import { setupHead } from "./modules/setupHead";
import { SzppRouteRecord } from "./models/RouteMetas";

const route = useRoute() as SzppRouteRecord;
setupHead({
  path: computed(() => route.path),
  rawTitle: computed(() => route.meta?.title),
  description: computed(() => route.meta?.description ?? ""),
});
</script>

<template>
  <GlobalNavHeader />
  <router-view />
  <PageFooter />
</template>
