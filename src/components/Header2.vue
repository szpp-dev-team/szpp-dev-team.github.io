<template>
  <h2 class="header-2">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
.header-2 {
  color: var(--c-primary-deep);
  border-bottom: 1px solid var(--c-primary-deep);
  text-align: center;
  display: block;
  width: 100%;
}
</style>
