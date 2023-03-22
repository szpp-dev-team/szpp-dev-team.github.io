<script setup lang="ts">
const iconClass = {
  calendar: "fa-solid fa-calendar",
  pen: "fa-solid fa-pen-to-square",
  clock: "fa-solid fa-clock",
};
defineProps<{
  icon?: keyof typeof iconClass;
  prefix?: string;
  yyyyMmDd: string;
}>();
</script>

<template>
  <div class="date-wrapper">
    <i v-if="icon" :class="iconClass[icon]"></i>
    <span v-if="prefix">{{ prefix }}</span>
    <time :datetime="yyyyMmDd">{{ yyyyMmDd }}</time>
  </div>
</template>

<style scoped lang="scss">
.date-wrapper {
  > i {
    margin-right: 0.25em;
  }
}
</style>
