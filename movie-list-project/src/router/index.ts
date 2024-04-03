import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChannelView from '@/views/ChannelView.vue'
import MyView from '@/views/MyView.vue'
import { inject, type Ref } from 'vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { requiresAuth: false }
    },
    {
      path: '/channel',
      component: ChannelView,
      meta: { requiresAuth: false }
    },
    {
      path: '/my',
      component: MyView,
      meta: { requiresAuth: false }
    },
    {
      path: '/movie',
      redirect: { path: '/' },
      meta: { requiresAuth: true }
    },
    {
      path: '/movie/:id',
      component: () => import('@/views/MovieView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 允许访问 不需要认证的页面或者未定义认证的页面
  if (!to.meta.requiresAuth || !to.meta.requiresAuth === undefined) {
    next()
    return
  }
  const name = inject('username') as Ref<string>

  if (!name.value) {
    next('/my')
    return
  }
  next()
})
export default router
