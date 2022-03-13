<script setup lang="ts">
import GeneralCard from './GeneralCard.vue';

defineProps<{
  imgSrc: string,
  imgAlt: string,
  title: string,
  href: string,
}>();
</script>

<template>
  <a class="info-card" :href="href">
    <GeneralCard :img-src="imgSrc" :img-alt="imgAlt">
      <header class="header">{{ title }}</header>
      <p class="text">
        <slot />
      </p>
    </GeneralCard>
  </a>
</template>

<style scoped lang="scss">
.info-card {
  text-decoration: none;

  & .header {
    color: var(--fg-theme-deep);
    font-weight: bold;
    font-size: 1.5rem;
  }

  & .text {
    color: var(--fg-main);
    font-size: 1rem;
  }
}
</style>
