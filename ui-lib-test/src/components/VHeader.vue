<script lang="ts" setup></script>

<template>
  <el-menu :default-active="$route.path" class="justify-center" mode="horizontal" router>
    <el-menu-item index="/">To do List</el-menu-item>
    <el-menu-item index="/course-grade">课程成绩</el-menu-item>
    <el-menu-item index="/personal-score">个人成绩</el-menu-item>
  </el-menu>
</template>

<style scoped></style>
