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
  padding: 0 16px;
  background-color: #f0f9ff;
}
</style>

<style>
.markdown-wrapper {
  background-color: #fff;
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
}
</style>
