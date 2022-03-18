<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';

</script>

<template>
  <PageHeader />
  <main class="main">
    <router-view />
  </main>
  <PageFooter />
</template>
