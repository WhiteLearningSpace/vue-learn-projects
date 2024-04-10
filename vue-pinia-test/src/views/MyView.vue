<script lang="ts" setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <div class="container">
    <h1 v-if="userStore.username != ''">欢迎，{{ userStore.username }}</h1>
    <h1>这是个人简介页面</h1>
    <h2>姓名：XXX</h2>
    <h2>学号：XXXXXXXXX</h2>
    <h1>
      <a
        href="https://gitee.com/linw-gite/vue-learn-projects/tree/main/vue-pinia-test"
        target="_blank"
      >
        gitee仓库
      </a>
    </h1>
    <img alt="vue自动测试截图" src="@/assets/images/1-2.png" />
    <img alt="vue自动测试截图" src="@/assets/images/3-4.png" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

img {
  width: 100%;
}
</style>
