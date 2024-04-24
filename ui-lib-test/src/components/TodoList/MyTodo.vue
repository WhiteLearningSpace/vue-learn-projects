<script lang="ts" setup>
import { useTodo } from '@/hooks/useTodo'
import TodoAdd from '@/components/TodoList/TodoAdd.vue'
import TodoList from '@/components/TodoList/TodoList.vue'
import TodoFilter from '@/components/TodoList/TodoFilter.vue'
import { ref } from 'vue'

const {
  todos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  removeAll,
  removeAllFiltered,
  stateFilter,
  filteredTodos
} = useTodo()

const isDesktop = ref(true)
if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
  // 当前设备是移动设备
  isDesktop.value = false
}

const activeName = ref('')

const handleEdit = (id: number) => {
  const p = prompt(`修改${id}的内容`)
  if (p == null) return
  const str = p.trim()
  if (!str) return
  editTodo(id, str)
}

const filterOptions = [
  { value: 'all', text: '全部' },
  { value: 'completed', text: '完成' },
  { value: 'incomplete', text: '未完成' }
]
const operationOption = [
  { value: 'removeAll', text: '删除全部' },
  { value: 'removeAllFiltered', text: '删除当前列表' }
]
const handleChange = (value: string) => {
  console.log(value)
  if (value === 'removeAll') {
    removeAll()
  } else if (value === 'removeAllFiltered') {
    removeAllFiltered()
  }
}
</script>

<template>
  <div class="box flex justify-center bg-gray-100">
    <el-card v-if="isDesktop" class="flex flex-col items-center max-w-[640px] w-full m-4">
      <template #header>
        <TodoAdd @addTodo="addTodo" />
        <TodoFilter
          v-model="stateFilter"
          :todoLength="todos.length"
          @removeAll="removeAll"
          @removeAllFiltered="removeAllFiltered"
        />
      </template>
      <TodoList
        :todos="filteredTodos"
        @editTodo="editTodo"
        @removeTodo="removeTodo"
        @toggleTodo="toggleTodo"
      />
    </el-card>
    <div v-else class="w-full my-2">
      <van-dropdown-menu>
        <van-dropdown-item v-model="stateFilter" :options="filterOptions" />
        <van-dropdown-item :options="operationOption" title="操作" @change="handleChange" />
      </van-dropdown-menu>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item
          v-for="item in filteredTodos"
          :key="item.id"
          :name="item.id"
          :title="item.text"
          :title-class="item.isCompleted ? 'text-green-600 font-bold line-through' : ''"
        >
          <van-space class="flex w-full justify-around">
            <van-button
              :type="item.isCompleted ? 'success' : 'primary'"
              class="w-[80px]"
              size="small"
              @click="toggleTodo(item.id)"
            >
              {{ item.isCompleted ? '已完成' : '未完成' }}
            </van-button>
            <van-button class="w-[80px]" size="small" type="primary" @click="handleEdit(item.id)">
              修改
            </van-button>
            <van-button class="w-[80px]" size="small" type="danger" @click="removeTodo(item.id)">
              删除
            </van-button>
          </van-space>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-card__header) {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

:deep(.el-card__body) {
  width: 100%;
}
</style>
