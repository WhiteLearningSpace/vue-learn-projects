<script lang="ts" setup>
import { zhCn } from 'element-plus/es/locale/index'
import { Locale } from 'vant'
import * as vZhCN from 'vant/es/locale/lang/zh-CN'
import VHeader from '@/components/VHeader.vue'

Locale.use('zh-CN', vZhCN)
</script>

<template>
  <el-config-provider :locale="zhCn">
    <VHeader />
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
