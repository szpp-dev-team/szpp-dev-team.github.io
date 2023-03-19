<script lang="ts" setup>
const p = defineProps<{
  theme: "primary" | "secondary";
  rounding?: "full" | "corner" | "none";
  routerLink?: string;
}>();

const clazz = {
  primary: p.theme === "primary",
  secondary: p.theme === "secondary",
  "rounded-full": p.rounding === "full",
  "rounded-corner": p.rounding === "corner",
};
</script>

<template>
  <RouterLink v-if="routerLink" :to="routerLink" class="btn" :class="clazz">
    <slot />
  </RouterLink>
  <button v-else class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0.5em 1em;
  transition: 0.3s;
  font-weight: 500;
}

@mixin btn-theme($fg, $bg) {
  color: $fg;
  background: $bg;
  /* border: 2px solid $bg; */

  &:hover {
    background: $fg;
    color: $bg;
  }
}

.primary {
  @include btn-theme(#fff, var(--c-primary-main));
}

.secondary {
  @include btn-theme(var(--c-secondary-dark), var(--c-secondary-light));
}

.rounded-full {
  border-radius: 99em;
}

.rounded-corner {
  border-radius: 0.5em;
}
</style>
