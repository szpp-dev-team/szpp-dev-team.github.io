<script lang="ts" setup>
import Breadcrumb from "@/models/Breadcrumb";

defineProps<{
  items: Array<Breadcrumb>;
  noRoot?: boolean;
  rootLabel?: string;
}>();
</script>

<template>
  <nav>
    <ul class="breadcrumb-list">
      <li v-if="!noRoot" class="breadcrumb-item">
        <RouterLink to="/" class="link">{{ rootLabel ?? "TOP" }}</RouterLink>
      </li>
      <li v-for="x in items" :key="x.href" class="breadcrumb-item">
        <RouterLink :to="x.href" class="link">{{ x.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb-list {
  list-style: none;
}

.breadcrumb-item {
  display: inline-block;

  &:not(:first-child)::before {
    content: ">";
    color: var(--c-secondary-main);
    margin: 0 0.5em;
  }

  &:last-child {
    font-weight: 500;
  }
}

.link {
  color: var(--c-primary-dark);

  &:hover {
    text-decoration: underline;
  }
}
</style>
