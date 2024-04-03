import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style.css'

const app = createApp(App)

app.use(router)

const item = localStorage.getItem('CACE33A8-418F-402D-D3EB-4087F2BF8E1CUsername')
const username = ref<String>('')
if (item) {
  username.value = item
}
app.provide('username', username)

app.mount('#app')
