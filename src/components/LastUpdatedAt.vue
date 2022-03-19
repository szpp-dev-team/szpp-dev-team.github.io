<script setup lang="ts">import { computed } from 'vue';

const props = defineProps<{
  y: string | number,
  m: string | number,
  d: string | number,
}>();

const year = computed(() => String(props.y).padStart(4, '0'));
const month = computed(() => String(props.m).padStart(2, '0'));
const date = computed(() => String(props.d).padStart(2, '0'));

const machineReadableDate = computed(() => `${year.value}-${month.value}-${date.value}`)
const humanReadableDate = machineReadableDate;
</script>

<template>
  <span class="last-updated">最終更新日：<time :datetime="machineReadableDate">{{ humanReadableDate }}</time></span>
</template>

<style scoped lang="scss">
.last-updated {
  color: var(--c-secondary);
}
</style>
