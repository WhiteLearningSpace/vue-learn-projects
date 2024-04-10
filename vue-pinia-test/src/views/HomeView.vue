<script lang="ts" setup>
import { useTodo } from '@/hooks/useTodo'
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
import { useUserStore } from '@/stores/user'

const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  removeAll,
  removeAllFiltered,
  stateFilter,
  filteredTodos
} = useTodo()

const userStore = useUserStore()
</script>

<template>
  <div class="container">
    <h1>欢迎，{{ userStore.username }}</h1>
    <h1 class="title">TODOLIST</h1>
    <todo-add @add-todo="addTodo" />
    <todo-filter
      v-model="stateFilter"
      @remove-all="removeAll"
      @remove-all-filtered="removeAllFiltered"
    />
    <todo-list
      :edit-todo="editTodo"
      :remove-todo="removeTodo"
      :todos="filteredTodos"
      :toggle-todo="toggleTodo"
    />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

.title {
  font-size: 2em;
  text-shadow: 2px 6px 6px #919191;
}
</style>
