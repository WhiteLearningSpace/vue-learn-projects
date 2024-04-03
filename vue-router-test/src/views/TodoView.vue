<script lang="ts" setup>
import { useTodo } from '@/hooks/useTodo'
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'

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
  <main>
    <h1><a href="https://gitee.com/linw-gite/vue-todo-demo" target="_blank">gitee仓库</a></h1>

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
  </main>
</template>

<style scoped>
main {
  padding: 0 2em;
}
</style>
