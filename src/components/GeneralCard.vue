<script setup lang="ts">
defineProps<{
  imgSrc: string,
  imgAlt: string,
}>();
</script>

<template>
  <div class="general-card">
    <div class="imagewrapper">
      <img class="img" :src="imgSrc" :alt="imgAlt" />
      <!-- <span class="overlaytext">詳しく</span> -->
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
$image-height: 200px;

.general-card {
  & {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    transition: all .3s;
  }

  > .imagewrapper {
    position: relative;

    & > .overlaytext {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      opacity: 0;
      color: white;
      transform: opacity .3s;
    }

    & > .img {
      object-fit: cover;
      width: 100%;
      height: $image-height;
      min-width: 100%;
      transition: filter .3s;
    }
  }

  > .content {
    background-color: #fff;
    height: calc(100% - $image-height);
    padding: 1rem 1rem;
    word-break: break-word;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .5);

    & .img {
      filter: brightness(0.5);
    }

    & .overlaytext {
      opacity: 1;
    }
  }
}
</style>
