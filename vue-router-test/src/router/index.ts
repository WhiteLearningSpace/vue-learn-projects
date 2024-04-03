import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/MyView.vue')
    }
  ]
})

export default router
