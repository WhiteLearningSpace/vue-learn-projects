import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')

  const login = (name: string) => {
    username.value = name
  }

  const logout = () => {
    username.value = ''
  }

  return { username, login, logout }
})
