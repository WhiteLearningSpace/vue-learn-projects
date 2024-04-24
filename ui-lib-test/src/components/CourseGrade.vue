<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Data } from '@/components/PersonalScore.vue'

const searchValue = ref()

const value1 = ref()
const value2 = ref('1')
const value3 = ref()

const switch1 = ref(false)
const switch2 = ref(false)
// Vue3开发初体验 Vue3组件化开发 Vue3路由的使用 电影列表项目 Vue目动化测试 状态管理Pinia 使用UI组件库
const option2 = [
  { text: 'Vue3开发初体验', value: '1' },
  { text: 'Vue3组件化开发', value: '2' },
  { text: 'Vue3路由的使用', value: '3' },
  { text: '电影列表项目', value: '4' },
  { text: 'Vue单元测试', value: '5' },
  { text: 'Vue动画化测试', value: '6' },
  { text: '状态管理Pinia', value: '7' },
  { text: '使用UI组件库', value: '8' }
]
// 全部 22软件技术3班 21软件技术1班 22软件技术1班 20软件技术2班
const option3 = [
  { text: '全部', value: '1' },
  { text: '22软件技术3班', value: '2' },
  { text: '21软件技术1班', value: '3' },
  { text: '22软件技术1班', value: '4' },
  { text: '20软件技术2班', value: '5' }
]

const activeNames = ref([])

const taskName = computed(() => {
  return option2.find((item) => item.value === value2.value)?.text
})

const data: Data[] = [
  {
    id: 1,
    taskName: '姓名X',
    score: 95,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 2,
    taskName: '姓名X',
    score: 85,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 3,
    taskName: '姓名X',
    score: undefined,
    comments: '',
    isCompleted: true
  },
  {
    id: 4,
    taskName: '姓名X',
    score: undefined,
    comments: '',
    isCompleted: false
  },
  {
    id: 5,
    taskName: '姓名X',
    score: 55,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 6,
    taskName: '姓名X',
    score: 45,
    comments: '功能完善，按要求完成任务',
    isCompleted: true
  },
  {
    id: 7,
    taskName: '姓名X',
    score: 35,
    comments: '无',
    isCompleted: true
  }
]
</script>

<template>
  <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" title="筛选">
      <van-cell center title="小组任务">
        <template #right-icon>
          <van-switch v-model="switch1" />
        </template>
      </van-cell>
      <van-cell center title="我的反馈">
        <template #right-icon>
          <van-switch v-model="switch2" />
        </template>
      </van-cell>
    </van-dropdown-item>
    <van-dropdown-item v-model="value2" :options="option2" title="选择任务" />
    <van-dropdown-item v-model="value3" :options="option3" title="班级" />
  </van-dropdown-menu>

  <div class="w-full flex justify-center my-2">
    {{ taskName }}
  </div>
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
