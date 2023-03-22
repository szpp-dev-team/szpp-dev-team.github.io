<script lang="ts" setup>
import { CSSProperties, StyleValue } from "vue";

const p = defineProps<{
  wrap?: CSSProperties["flexWrap"];
  rowGap?: CSSProperties["rowGap"];
  colGap?: CSSProperties["columnGap"];
  justify?: string;
  align?: string;
}>();

const style: StyleValue = {
  display: "flex",
  flexWrap: p.wrap,
  rowGap: p.rowGap,
  columnGap: p.colGap,
  justifyContent: p.justify,
  alignItems: p.align,
};
</script>

<template>
  <div :style="style">
    <slot />
  </div>
</template>
