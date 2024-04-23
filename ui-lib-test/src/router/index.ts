import { createRouter, createWebHashHistory } from 'vue-router'
import MyTodo from '@/components/TodoList/MyTodo.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: MyTodo
    }
  ]
})

export default router
