<script lang="ts" setup>
import type { Todo } from '@/hooks/useTodo'
import TodoItem from './TodoItem.vue'

defineProps<{
  todos: Todo[]
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
  editTodo: (id: number, text: string) => void
}>()
</script>

<template>
  <div class="todo-list">
    <todo-item
      v-for="v in todos"
      :key="v.id"
      :todo="v"
      @remove-todo="removeTodo"
      @toggle-todo="toggleTodo"
      @edit-todo="editTodo"
    />
  </div>
</template>

<style scoped>
.todo-list {
  background-color: #fff;
  padding: 16px;
}
</style>
