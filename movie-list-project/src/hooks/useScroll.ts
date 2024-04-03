import { onMounted, onUnmounted } from 'vue'

type ScrollDirection = 'up' | 'down'

/**
 * 监听滚动方向，当滚动方向发生变化时调用回调函数，根据生命周期自动销毁监听
 * @param callback 回调函数，当滚动方向发生变化时调用，参数为滚动方向 'up' | 'down'
 */
export const useScrollDirection = (callback: (direction: ScrollDirection) => void) => {
  let lastScrollTop = 0

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
      callback('down')
    } else if (scrollTop < lastScrollTop) {
      callback('up')
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}

/**
 * 监听滚动到底部，当滚动到底部时调用回调函数
 * @param callback 回调函数，当滚动到底部时调用
 */
export const useScrollBottom = (callback: () => void) => {
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
