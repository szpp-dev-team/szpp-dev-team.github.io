<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
</script>

<template>
  <div>
    <PageHeader />
    <main class="main">
      <router-view />
    </main>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
.main {
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
  padding: 64px 0;
}
</style>
