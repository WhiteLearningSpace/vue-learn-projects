<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isShowSearchBox = ref(false)
const tabIndex = ref(0)

const changeTab = (index: number) => {
  tabIndex.value = index
}
</script>

<template>
  <header>
    <div>
      <i class="iconfont icon-rili" />
      <nav>
        <router-link to="/">发现</router-link>
        <router-link to="/channel">频道</router-link>
        <router-link to="/my">我的</router-link>
      </nav>
      <i class="iconfont icon-search" @click="isShowSearchBox = true" />
      <div
        v-show="isShowSearchBox"
        class="search-box-overlay"
        @click="isShowSearchBox = false"
      ></div>
      <div v-show="isShowSearchBox" class="search-box">
        <!-- 搜索栏 -->
        <div class="search-input-box">
          <div>
            <i class="iconfont icon-search" />
            <input type="text" />
          </div>
          <span @click="isShowSearchBox = false">取消</span>
        </div>
        <!-- tab栏 -->
        <div class="search-tab">
          <div class="search-tab-index-box">
            <div
              :class="tabIndex == 0 ? 'active' : ''"
              class="tab-index-item"
              @click="changeTab(0)"
            >
              影片
            </div>
            <div
              :class="tabIndex == 1 ? 'active' : ''"
              class="tab-index-item"
              @click="changeTab(1)"
            >
              默认排序
            </div>
            <div
              :class="tabIndex == 2 ? 'active' : ''"
              class="tab-index-item"
              @click="changeTab(2)"
            >
              全部频道
            </div>
          </div>
          <div v-show="tabIndex == 0" class="tab-item">
            <div class="tag">奇幻森林</div>
            <div class="tag">速度与激情1</div>
            <div class="tag">盗墓笔记</div>
            <div class="tag">鲨滩</div>
            <div class="tag">死磕到底</div>
            <div class="tag">芭比之时尚奇迹</div>
            <div class="tag">窈窕赌女</div>
            <div class="tag">猛鬼差馆</div>
            <div class="tag">风流刺客</div>
            <div class="tag">死亡岛</div>
            <div class="tag">奇幻森林</div>
            <div class="tag">速度与激情1</div>
            <div class="tag">盗墓笔记</div>
            <div class="tag">鲨滩</div>
            <div class="tag">死磕到底</div>
            <div class="tag">芭比之时尚奇迹</div>
            <div class="tag">窈窕赌女</div>
            <div class="tag">猛鬼差馆</div>
            <div class="tag">风流刺客</div>
            <div class="tag">死亡岛</div>
            <div class="tag">奇幻森林</div>
            <div class="tag">速度与激情1</div>
            <div class="tag">盗墓笔记</div>
            <div class="tag">鲨滩</div>
            <div class="tag">死磕到底</div>
            <div class="tag">芭比之时尚奇迹</div>
            <div class="tag">窈窕赌女</div>
            <div class="tag">猛鬼差馆</div>
            <div class="tag">风流刺客</div>
            <div class="tag">死亡岛</div>
          </div>
          <div v-show="tabIndex == 1" class="tab-item">
            <div class="tag">倒序</div>
            <div class="tag">正序</div>
          </div>
          <div v-show="tabIndex == 2" class="tab-item">
            <div class="tag">全部频道</div>
            <div class="tag">创意</div>
            <div class="tag">励志</div>
            <div class="tag">搞笑</div>
            <div class="tag">运动</div>
            <div class="tag">旅行</div>
            <div class="tag">爱情</div>
            <div class="tag">广告</div>
            <div class="tag">动画</div>
            <div class="tag">剧情</div>
            <div class="tag">音乐</div>
            <div class="tag">科幻</div>
            <div class="tag">纪录</div>
            <div class="tag">预告</div>
            <div class="tag">混剪</div>
            <div class="tag">实验</div>
            <div class="tag">生活</div>
            <div class="tag">时尚</div>
            <div class="tag">汽车</div>
            <div class="tag">游戏</div>
            <div class="tag">美食</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/iconfont/iconfont.css';

header {
  display: flex;
  justify-content: center;
  background-color: #121212;
  padding: 18px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.search-box-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.search-box {
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //height: 200px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
  box-sizing: border-box;
  color: white;

  .search-input-box {
    color: #919191;
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      flex-shrink: 0;
      cursor: pointer;
    }

    div {
      width: 100%;
      background-color: #333;
      padding-left: 10px;
      margin-right: 10px;
      border-radius: 4px;

      .iconfont {
        color: #919191;
      }

      input {
        width: 100%;
        height: 32px;
        border: 0;
        background-color: #333;
        color: white;
        outline: none;
        padding: 0 10px;
      }
    }
  }

  .search-tab {
    display: flex;
    flex-direction: column;
    width: 100%;

    .search-tab-index-box {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;

      .tab-index-item {
        color: #919191;
        cursor: pointer;

        &.active {
          color: white;

          &::after {
            transform: rotate(-92deg);
            transition: transform 280ms;
          }
        }

        &::after {
          content: '>';
          margin-left: 5px;
          transform: rotate(90deg);
          transition: transform 280ms;
          color: #cbcbcb;
        }
      }
    }

    .tab-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;

      .tag {
        display: inline-block;
        margin: 6px;
        padding: 5px;
        font-size: 13px;
        border-radius: 5px;
        background-color: #333;
        color: #919191;
        cursor: pointer;
      }
    }
  }
}

nav {
  margin: 0 5vw;

  a {
    margin: 5vw;
    color: #8c8c8c;

    &.router-link-active {
      color: white;
    }
  }
}

.iconfont {
  color: white;
  cursor: pointer;

  &.icon-rili {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>
