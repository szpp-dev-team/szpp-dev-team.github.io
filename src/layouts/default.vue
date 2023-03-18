<script setup lang="ts"></script>

<template>
  <main class="main">
    <router-view />
  </main>
</template>

<style scoped lang="scss">
.main {
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
  padding: 64px 0;
}
</style>
