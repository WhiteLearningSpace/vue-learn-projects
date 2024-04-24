<script setup lang="ts">
const stateFilter = defineModel()

defineProps<{
  todoLength: number
}>()

const emits = defineEmits<{
  removeAll: []
  removeAllFiltered: []
}>()
const options = [
  { name: 'all', label: '全部' },
  { name: 'completed', label: '完成' },
  { name: 'incomplete', label: '未完成' }
]
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <el-select v-model="stateFilter" placeholder="筛选状态" class="w-[120px]" style="width: 120px">
      <el-option v-for="item in options" :key="item.name" :label="item.label" :value="item.name" />
    </el-select>

    <div class="flex">
      <el-text class="text-nowrap" style="margin: 0 8px" size="small"
        >数量：{{ todoLength }}
      </el-text>
      <el-button type="danger" @click="emits('removeAllFiltered')">删除当前列表</el-button>
      <el-button type="danger" @click="emits('removeAll')">删除全部</el-button>
    </div>
  </div>
</template>

<style scoped></style>
