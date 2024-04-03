<script lang="ts" setup>
import { useCategoryImages } from '@/hooks/useAssets'

const { categories } = useCategoryImages()
</script>

<template>
  <div class="container">
    <div v-for="item in categories" :key="item.id" class="img-box">
      <div class="text">#{{ item.name }}#</div>
      <img :alt="item.name" :src="item.imgUrl" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 650px;
}

.img-box {
  position: relative;
  height: 175px;

  .text {
    position: absolute;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    color: white;
    font-weight: bold;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.25);
  }
}

img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
