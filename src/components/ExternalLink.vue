<script setup lang="ts">
defineProps<{
  href: string,
}>();
</script>

<template>
  <a :href="href" target="_blank" rel="noreferrer noopener">
    <slot />
  </a>
</template>
