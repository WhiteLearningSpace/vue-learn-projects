<script lang="ts" setup>
import { ref } from 'vue'

const text = ref<string>('')

const emits = defineEmits<{
  addTodo: [todo: string]
}>()

const onSubmit = () => {
  if (!text.value) {
    return
  }
  emits('addTodo', text.value)
  text.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="add-input">
      <input v-model.trim="text" type="text" />
      <button type="submit"></button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
}

.add-input {
  display: flex;
  margin: 8px 0;
  border-radius: 99999px;
  background-color: #fff;
}

.add-input input {
  border: 0;
  outline: none;
  border-radius: 99999px;
  padding-left: 16px;
  font-size: 16px;
}

.add-input button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  padding: 8px 10px;
  position: relative;
  background-color: #23c0ff;
  color: white;
}

.add-input button::before {
  content: '+';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
}
</style>
