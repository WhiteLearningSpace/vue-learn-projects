<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'

const emits = defineEmits<{
  addTodo: [text: string]
}>()

const inputText = ref('')

const handleSubmit = () => {
  const s = inputText.value.trim()
  if (s === '') {
    inputText.value = ''
    alert('请输入内容')
    return
  }
  emits('addTodo', inputText.value)
  inputText.value = ''
}
</script>

<template>
  <div class="card-header">
    <el-form @submit="handleSubmit">
      <el-form-item>
        <el-input v-model="inputText" placeholder="输入新的事项" size="large" style="width: 240px">
          <template #append>
            <el-button :icon="Plus" native-type="submit" />
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
