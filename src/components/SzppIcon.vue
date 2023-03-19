<script lang="ts" setup>
defineProps<{
  padded?: boolean;
}>();
</script>

<template>
  <img
    :src="
      padded
        ? '/szpp-logo-untransparent-padded.jpeg'
        : '/szpp-logo-untransparent.jpeg'
    "
    alt="szpp's logo"

  />
</template>

<style scoped lang="scss">
</style>
