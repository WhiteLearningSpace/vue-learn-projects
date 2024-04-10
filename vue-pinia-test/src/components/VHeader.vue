<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()

const handleLogout = () => {
  userStore.logout()
  router.replace('/login')
}
</script>

<template>
  <header>
    <nav>
      <router-link to="/">主页</router-link>
      |
      <router-link to="/my">个人简介</router-link>
    </nav>
    <div v-if="userStore.username != ''" class="logout-btn" @click="handleLogout">退出登录</div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  display: flex;
  width: 100%;
  background-color: #2eb1ff;
  justify-content: center;
}

nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  font-size: 32px;
  color: black;
}

nav a {
  color: #5d5d5d;
  text-decoration: none;
  font-size: 1em;
}

nav a.router-link-active {
  color: black;
}

.logout-btn {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.4em;
}
</style>
