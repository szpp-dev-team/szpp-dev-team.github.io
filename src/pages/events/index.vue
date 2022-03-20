<route lang="yaml">
meta:
  title: イベント一覧
</route>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import pages from '~pages';
import EventList from '@/components/EventList.vue';

const currentPath = useRoute().path;
const events = pages.filter(p => p.path !== currentPath && p.path.startsWith(currentPath));
</script>

<template>
  <section class="container">
    <h1 class="top-header">イベント一覧</h1>
    <p class="page-description">イベントの告知や事後報告の一覧です。</p>
    <EventList :routes="events" />
  </section>
</template>

<style scoped lang="scss">
.top-header {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.page-description {
  margin: 1rem 0 2rem;
}
</style>
