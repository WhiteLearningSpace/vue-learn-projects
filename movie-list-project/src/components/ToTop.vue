<script setup lang="ts">

import { useScrollDirection } from '@/hooks/useScroll'
import { ref } from 'vue'

const isShowTop = ref(false)

useScrollDirection((direction) => {
  if (direction === 'down') {
    isShowTop.value = false
    isSmoothScrolling.value = false
  }
  if (direction === 'up' && !isSmoothScrolling.value) {
    isShowTop.value = true
  }
})

const isSmoothScrolling = ref(false)
const toTop = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  isSmoothScrolling.value = true
  isShowTop.value = false
}
</script>

<template>
  <Transition>
    <div v-show="isShowTop" class="top-btn" @click="toTop">
      <i class="iconfont icon-top" />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '@/assets/iconfont/iconfont.css';

.v-enter-active,
.v-leave-active {
  transition: scale 280ms ease;
}

.v-enter-from,
.v-leave-to {
  scale: 0;
}

.top-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  background-color: #3c97ff;
  border-radius: 50%;
}

.icon-top {
  color: white;
  font-size: 32px;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
}
</style>