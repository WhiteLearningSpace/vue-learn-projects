<script lang="ts" setup>
import { zhCn } from 'element-plus/es/locale/index'
import { Locale } from 'vant'
import * as vZhCN from 'vant/es/locale/lang/zh-CN'

Locale.use('zh-CN', vZhCN)
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-button type="primary">element button</el-button>
    <el-button type="success">element button</el-button>
    <el-button type="info">element button</el-button>
    <el-button type="danger">element button</el-button>
    <el-button type="warning">element button</el-button>
    <el-button type="text">element button</el-button>
    <br />
    <van-button type="default">vant button</van-button>
    <van-button type="primary">vant button</van-button>
    <van-button type="success">vant button</van-button>
    <van-button type="danger">vant button</van-button>
    <van-button type="warning">vant button</van-button>
  </el-config-provider>
</template>

<style scoped></style>
