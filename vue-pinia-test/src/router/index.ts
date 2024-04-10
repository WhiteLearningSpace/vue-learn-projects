import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: [
        () => {
          //
          const userStore = useUserStore()
          if (userStore.username.trim() == '') {
            return '/login'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/MyView.vue')
    }
  ]
})

export default router
