<script lang="ts" setup>
import { ColumnGapProperty, FlexWrapProperty, RowGapProperty } from 'csstype';
import { StyleValue } from 'vue';


const p = defineProps<{
  wrap?: FlexWrapProperty,
  rowGap?: RowGapProperty<string | number>,
  colGap?: ColumnGapProperty<string | number>,
  justify?: string,
  align?: string,
}>();

const style: StyleValue = {
  display: 'flex',
  flexWrap: p.wrap,
  rowGap: p.rowGap,
  columnGap: p.colGap,
  justifyContent: p.justify,
  alignItems: p.align,
}
</script>

<template>
  <div :style="style">
    <slot />
  </div>
</template>
