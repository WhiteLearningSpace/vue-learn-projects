<script lang="ts" setup>
import { ref } from 'vue'

const searchValue = ref('')

const value1 = ref('')

const option1 = [
  { text: '前端框架应用项目开发', value: '1' },
  { text: '专业技能综合实践(2024春季)', value: '2' },
  { text: '24春季进销存系统设计与实现', value: '3' },
  { text: '后端技术与项目开发', value: '4' },
  { text: '软件测试技术', value: '5' }
]

const value2 = ref('')
const option2 = [
  { text: '全部', value: '1' },
  { text: '刷题', value: '2' },
  { text: '作品', value: '3' }
]

const activeNames = ref([])

interface Data {
  id: number
  taskName: string
  score: number | undefined
  comments: string
  isCompleted: boolean
}

const data: Data[] = [
  {
    id: 1,
    taskName: 'Vue3开发初体验',
    score: 95,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 2,
    taskName: 'Vue3组件化开发',
    score: 85,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 3,
    taskName: 'Vue前端基础刷题',
    score: 75,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 4,
    taskName: 'Vue3路由的使用',
    score: 65,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 5,
    taskName: '电影列表项目',
    score: 55,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 6,
    taskName: 'Vue自动化测试',
    score: undefined,
    comments: '无',
    isCompleted: false
  },
  {
    id: 7,
    taskName: '状态管理Pinia',
    score: 85,
    comments: '无',
    isCompleted: true
  },
  {
    id: 8,
    taskName: '使用UI组件库',
    score: undefined,
    comments: '无',
    isCompleted: true
  },
  {
    id: 9,
    taskName: '状态管理Pinia',
    score: 85,
    comments: '无',
    isCompleted: true
  },
  {
    id: 10,
    taskName: '状态管理Pinia',
    score: 85,
    comments: '无',
    isCompleted: true
  },
  {
    id: 11,
    taskName: '状态管理Pinia',
    score: 85,
    comments: '无',
    isCompleted: true
  },
  {
    id: 12,
    taskName: '状态管理Pinia',
    score: 85,
    comments: '无',
    isCompleted: true
  }
]
</script>

<template>
  <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" title="选择课程" />
    <van-dropdown-item v-model="value2" :options="option2" title="任务类型" />
  </van-dropdown-menu>
  <van-divider>测试用户 333333</van-divider>
  <van-divider>
    <van-button size="small">前端框架应用项目开发</van-button>
  </van-divider>
  <van-collapse v-model="activeNames">
    <van-collapse-item
      v-for="item in data"
      :key="item.id"
      :name="item.id"
      :readonly="!item.isCompleted"
      :title="item.taskName"
      :value="
        item.isCompleted ? (item.score === undefined ? '未评分' : `${item.score}分`) : '未提交'
      "
      size="large"
    >
      <van-cell-group>
        <van-cell is-link title="浏览作品" />
        <van-cell :value="item.comments" title="评语" />
      </van-cell-group>
    </van-collapse-item>
  </van-collapse>
</template>

<style scoped></style>
