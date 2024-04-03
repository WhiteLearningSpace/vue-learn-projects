<script lang="ts" setup>

import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <router-link to="/">主页</router-link>
      |
      <router-link to="/todo">待办事项</router-link>
      |
      <router-link to="/my">个人简介</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #6b6b6b;
  font-size: 32px;
  color: black;
}

nav a {
  color: #e0e0e0;
}

nav a.router-link-active {
  color: white;
}
</style>