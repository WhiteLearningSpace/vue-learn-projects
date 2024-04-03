<script lang="ts" setup>
import type { Movie } from '@/hooks/useMovie'

withDefaults(
  defineProps<{
    movie: Movie,
    size: 'small' | 'large'
  }>(),
  {
    size: 'large'
  }
)


</script>

<template>
  <router-link :to="`/movie/${movie.id}`">
    <div class="card">
      <img :src="movie.coverUrl" alt="cover" />
      <div class="content">
        <div>{{ movie.category }} / {{ movie.duration }}</div>
        <div :class="size" class="title">{{ movie.title }}</div>
      </div>
    </div>
  </router-link>
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
  height: 100%;

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

    .title {
      &.small {
        font-size: 1em;
        margin: 0.2em 0;
      }

      &.large {
        font-size: 1.5em;
        margin: 0.6em 0;
        font-weight: bold;
      }
    }
  }
}
</style>
