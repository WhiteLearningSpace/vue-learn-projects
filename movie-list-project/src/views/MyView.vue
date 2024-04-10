<script lang="ts" setup>
import { inject, onMounted, ref, type Ref } from 'vue'

const username = ref('')
const password = ref('')
const name = inject('username') as Ref<string>

onMounted(() => {
  if (name) {
    username.value = name.value
  }
})

const handleSubmit = () => {
  if (!username.value || !password.value) {
    alert('请输入用户名和密码')
    return
  }
  localStorage.setItem('CACE33A8-418F-402D-D3EB-4087F2BF8E1CUsername', username.value)
  name.value = username.value
}

const quit = () => {
  name.value = ''
}

const changeName = () => {
  const newName = prompt('请输入新的用户名')
  if (newName == null) {
    return
  }
  if (!newName) {
    alert('不能为空')
    return
  }
  localStorage.setItem('CACE33A8-418F-402D-D3EB-4087F2BF8E1CUsername', newName)
  name.value = newName
}
</script>

<template>
  <div class="container">
    <h2>
      <a
        target="_blank"
        href="https://gitee.com/linw-gite/vue-learn-projects/tree/main/movie-list-project">
        Gitee仓库
      </a>
    </h2>
    <template v-if="name">
      <!--   登录后的组件   -->
      <img alt="avatar" src="@/assets/images/avatar.jpg" />
      <h1>欢迎回来，{{ name }}</h1>

      <button class="btn" @click="changeName">修改用户名</button>
      <button class="btn" @click="quit">退出登录</button>
    </template>
    <template v-else>
      <!--   未登录   -->
      <h1>请先登录</h1>
      <form @submit.prevent="handleSubmit">
        <label for="username">
          用户名：
          <input id="username" v-model.trim="username" type="text" />
        </label>
        <label for="password">
          密码：
          <input id="password" v-model.trim="password" type="password" />
        </label>
        <button class="login-btn" type="submit">登录</button>
      </form>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  text-align: center;
  color: white;

  .btn {
    padding: 8px 12px;
    margin: 0 12px;
  }

  form {
    margin: 0 auto;
    width: fit-content;

    label {
      display: block;
      width: 100%;
      text-align: right;
      margin: 8px 0;
    }

    input {
      font-size: 1.3em;
      height: 24px;
      vertical-align: baseline;
    }

    .login-btn {
      width: 100%;
      font-size: 1.2em;
      padding: 5px;
    }
  }
}

img {
  border-radius: 50%;
  max-width: 350px;
  width: 50%;
}
</style>
