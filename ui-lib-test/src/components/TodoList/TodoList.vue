<script lang="ts" setup>
import type { Todo } from '@/hooks/useTodo'

defineProps<{
  todos: Todo[]
}>()

const emits = defineEmits<{
  removeTodo: [id: number]
  toggleTodo: [id: number]
  editTodo: [id: number, text: string]
}>()
</script>

<template>
  <div class="w-full">
    <el-table
      :data="todos"
      cell-class-name="whitespace-nowrap"
      stripe
      style="width: 100%"
      table-layout="auto"
    >
      <el-table-column label="内容" prop="text" />

      <el-table-column label="操作">
        <template #default="scope: { row: Todo }">
          <div class="flex">
            <el-button
              :type="scope.row.isCompleted ? 'success' : 'primary'"
              @click="emits('toggleTodo', scope.row.id)"
            >
              {{ scope.row.isCompleted ? '已完成' : '未完成' }}
            </el-button>
            <el-button type="primary">修改</el-button>
            <el-button type="danger">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
table :deep(cell) {
  white-space: nowrap;
}
</style>
