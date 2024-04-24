import { createRouter, createWebHashHistory } from 'vue-router'
import MyTodo from '@/components/TodoList/MyTodo.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: MyTodo
    },
    {
      name: 'course-grade',
      path: '/course-grade',
      component: () => import('@/components/CourseGrade.vue')
    },
    {
      path: '/personal-score',
      name: 'personal-score',
      component: () => import('@/components/PersonalScore.vue')
    }
  ]
})

export default router
