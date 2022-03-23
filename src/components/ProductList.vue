<script setup lang="ts">
import { RouterRecorRaw } from 'vue-router';

defineProps<{
  routes: RouterRecorRaw[],
}>();
</script>

<template>
  <ul class="products">
    <li v-for="(r,i) in routes" :key="i" class="products__item">
      <RouterLink class="product">
    </li>
  </ul>
</template>>