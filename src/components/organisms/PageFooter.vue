<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="page-footer">
    <small class="copyright">&copy; 2022-2025 SZPP</small>
    <RouterLink to="/privacy-policy" class="--hover-underline"
      >プライバシーポリシー</RouterLink
    >
  </footer>
</template>

<style scoped lang="scss">
.page-footer {
  height: var(--height-footer);
  background-color: #464646;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .copyright {
    display: block;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
