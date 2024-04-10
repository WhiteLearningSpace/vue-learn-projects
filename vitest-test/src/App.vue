<script lang="ts" setup>
import TodoAdd from './components/TodoAdd.vue'
import TodoFilter from './components/TodoFilter.vue'
import TodoList from './components/TodoList.vue'
import { useTodo } from './hooks/useTodo'

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
</script>

<template>
  <div>
    <h1><a href="" target="_blank">gitee仓库</a></h1>

    <h1>TODOLIST</h1>
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
div {
  max-width: 800px;
  margin: 0 auto;
}
</style>
