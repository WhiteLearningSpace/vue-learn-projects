<script lang="ts" setup>
import type { Movie } from '@/hooks/useMovie'

defineProps<{
  movie: Movie
}>()
</script>

<template>
  <div class="card">
    <img :src="movie.coverUrl" alt="cover" />
    <div class="content">
      <div>{{ movie.category }} / {{ movie.duration }}</div>
      <h2>{{ movie.title }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
}

.card {
  position: relative;
  max-height: 360px;
  //height: 260px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .content {
    z-index: 99;
    position: absolute;
    bottom: 0;
    color: white;
    padding: 10px;

    h2 {
      margin: 0.2em 0;
    }
  }
}
</style>
