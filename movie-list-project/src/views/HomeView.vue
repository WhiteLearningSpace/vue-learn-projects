<script lang="ts" setup>
import MovieCard from '@/components/MovieCard.vue'
import { useMovieList } from '@/hooks/useMovie'
import { useScrollBottom } from '@/hooks/useScroll'
import { ref } from 'vue'
import ToTop from '@/components/ToTop.vue'

const { movies, loadMore } = useMovieList()

const isLoading = ref(false)

useScrollBottom(async () => {
  if (isLoading.value) return
  console.log('scroll to bottom')
  isLoading.value = true
  await loadMore()
  isLoading.value = false
})
</script>

<template>
  <main>
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
    <div v-show="isLoading" class="loading">加载中</div>

    <to-top />
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 600px;
}

.loading {
  text-align: center;
  padding: 32px 0;
  font-size: 32px;
  color: white;
}

.loading::after {
  content: '..';
  animation: loading-anim 800ms infinite;
}

@keyframes loading-anim {
  0% {
    content: '..';
    opacity: 0.5;
  }
  25% {
    content: '...';
    opacity: 1;
  }
  50% {
    content: '....';
    opacity: 0.5;
  }
  75% {
    content: '.....';
    opacity: 1;
  }
  100% {
    content: '......';
    opacity: 0.5;
  }
}
</style>
