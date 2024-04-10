<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  if (!username.value || !password.value) {
    alert('请输入用户名和密码')
    return
  }
  userStore.login(username.value)

  router.replace('/')
}
</script>

<template>
  <main>
    <h1>请先登录</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">
        <span>用户名:</span>
        <input id="username" v-model="username" placeholder="请输入用户名" type="text" />
      </label>
      <label for="password">
        <span>密码:</span>
        <input id="password" v-model="password" placeholder="请输入密码" type="password" />
      </label>
      <button type="submit">登录</button>
    </form>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 240px;
  margin: 0 auto;
}

input {
  width: 100%;
  font-size: 1.2em;
  box-sizing: border-box;
  padding: 4px 8px;
}

button {
  width: 100%;
  background-color: #5a83ff;
  color: white;
  padding: 8px;
  font-size: 1.1em;
}

label {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

label span {
  flex-shrink: 0;
  margin-left: 4px;
}
</style>
