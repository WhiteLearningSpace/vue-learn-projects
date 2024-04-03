<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useMovie, useMovieList } from '@/hooks/useMovie'
import MovieCard from '@/components/MovieCard.vue'

const route = useRoute()
const router = useRouter()
const { movie } = useMovie(Number(route.params.id))
if (movie.value == null) {
  alert('找不到电影')
  router.back()
}
const { movies } = useMovieList()
</script>

<template>
  <div class="container">
    <div>
      <div class="video-box">
        <video :src="movie?.videoUrl" controls />
        <div>
          <i class="iconfont icon-back" @click="$router.back" />
          <i class="iconfont icon-share" />
        </div>
      </div>

      <!--   视频信息   -->
      <div class="video-info">
        <div>
          <div class="video-title">{{ movie?.title }}</div>
          <div class="video-duration">时长：{{ movie?.duration }}</div>
        </div>
        <p class="video-category">类别：{{ movie?.category }}</p>
      </div>

      <!--   推荐   -->
      <h2 class="recommend-title">推荐视频1</h2>
      <div class="movie-list">
        <movie-card
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          class="movie-card"
          size="small"
        />
      </div>
      <h2 class="recommend-title">推荐视频2</h2>
      <div class="movie-list">
        <movie-card
          v-for="movie in movies.slice().reverse()"
          :key="movie.id"
          :movie="movie"
          class="movie-card"
          size="small"
        />
      </div>

      <!--   工具栏   -->
      <div class="tool-bar">
        <div class="comment-box">
          <i class="iconfont icon-edit" />
          <input placeholder="请输入评论" type="text" />
        </div>
        <i class="iconfont icon-aixin-xian" />
        <i class="iconfont icon-share" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/iconfont/iconfont.css';

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  > div {
    max-width: 600px;
    width: 100%;
  }

  .video-box {
    position: relative;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      z-index: 9999;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
    }

    .iconfont {
      font-size: 2em;

      &.icon-share {
        font-size: 1.5em;
      }
    }
  }

  .video-info {
    padding: 10px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .video-title {
      font-size: 1.8em;
      font-weight: bold;
    }

    .video-duration {
      font-size: 1.25em;
    }

    .video-category {
      font-size: 1.1em;
    }
  }

  .recommend-title {
    padding: 0 10px;
  }

  .movie-list {
    display: flex;
    width: 100%;
    overscroll-behavior: contain;
    overflow: auto;

    .movie-card {
      width: 180px;
      height: 160px;
      flex-shrink: 0;
    }
  }

  .tool-bar {
    z-index: 99;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 -10px 20px rgba(52, 52, 52, 0.8);
    box-sizing: border-box;
    gap: 16px;

    .iconfont {
      color: #5b5b5b;
      font-size: 1.2em;
    }

    .comment-box {
      background-color: #fff;
      border-radius: 9999px;
      padding: 10px;
      border: 1px solid #5b5b5b;
      width: 100%;
      display: flex;

      input {
        border-radius: 9999px;
        outline: none;
        border: none;
        font-size: 1em;
        width: 100%;
      }
    }

    .icon-aixin-xian {
      font-size: 1.5em;
    }

    .icon-share {
      font-size: 1.5em;
    }
  }
}

video {
  width: 100%;
  max-width: 600px;
}
</style>
