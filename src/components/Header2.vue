<template>
  <h2 class="header-2">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.header-2 {
  color: var(--fg-theme);
  border-bottom: 1px solid var(--fg-theme);
  text-align: center;
  display: block;
  width: 100%;
}
</style>
