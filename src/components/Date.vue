<script setup lang="ts">
const props = defineProps<{
  icon: 'calender' | null,
  prefix: string,
  yyyyMmDd: string
}>();
const date = props['yyyyMmDd'];
</script>

<template>
  <div class="date-wrapper">
    <i v-if="icon == 'calender'" class="fa-solid fa-calendar"></i>
    <span>{{ prefix }}</span>
    <time :datetime="date">{{ date }}</time>
  </div>
</template>

<style scoped lang="scss">
.date-wrapper {
  color: var(--c-secondary);
  display: inline-block;

  > i {
    margin-right: .25em;
  }
}
</style>
