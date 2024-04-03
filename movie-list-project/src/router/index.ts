import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChannelView from '@/views/ChannelView.vue'
import MyView from '@/views/MyView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/channel',
      name: 'channel',
      component: ChannelView
    },
    {
      path: '/my',
      name: 'my',
      component: MyView
    }
  ]
})

export default router
