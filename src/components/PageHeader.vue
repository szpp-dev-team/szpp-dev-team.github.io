<script setup lang="ts">

</script>


<template>
  <header class="header">
    <img src="/szpp-logo-untransparent.jpeg" alt="logo" class="header_icon" />
  </header>
</template>


<style lang="scss">
$header-height: 80px;

.header {
  height: $header-height;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
  background-color: var(--theme-main);

  &_icon {
    height: 100%;
    width: auto;
  }
}
</style>
