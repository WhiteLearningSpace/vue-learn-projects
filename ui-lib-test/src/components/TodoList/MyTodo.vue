<script lang="ts" setup>
import { useTodo } from '@/hooks/useTodo'
import TodoAdd from '@/components/TodoList/TodoAdd.vue'
import TodoList from '@/components/TodoList/TodoList.vue'

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
</script>

<template>
  <div class="box flex justify-center mt-4">
    <el-card class="flex flex-col items-center max-w-[640px] w-full m-4">
      <template #header>
        <TodoAdd @addTodo="addTodo" />
      </template>
      <TodoList
        :todos="filteredTodos"
        @editTodo="editTodo"
        @removeTodo="removeTodo"
        @toggleTodo="toggleTodo"
      />
    </el-card>
  </div>
</template>

<style scoped>
:deep(.el-card__body) {
  width: 100%;
}
</style>
