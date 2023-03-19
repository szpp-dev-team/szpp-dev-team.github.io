<script lang="ts" setup>
defineProps<{
  padded?: boolean;
}>();
</script>

<template>
  <img
    :src="
      padded
        ? '/szppy-untransparent-padded.jpeg'
        : '/szppy-untransparent.jpeg'
    "
    alt="szpp's logo"

  />
</template>

<style scoped lang="scss">
</style>
