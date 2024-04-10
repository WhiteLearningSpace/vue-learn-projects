<script lang="ts" setup>
import { RouterView } from 'vue-router'
import VHeader from '@/components/VHeader.vue'
</script>

<template>
  <v-header />
  <main>
    <router-view />
  </main>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #eeeeee;
}

main {
  max-width: 756px;
  margin: 0 auto;
}

button {
  cursor: pointer;
  border: none;
}
</style>
