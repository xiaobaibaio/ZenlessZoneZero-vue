<template>
  <div class="home_feature" ref="home_feature">
    <div class="home_feature_swiper">
      <span>
        <img :src="img" alt="" />
      </span>
    </div>
    <div class="home_feature_but fill">
      <div class="home_feature_but_left" @click="butLeft()"></div>
      <div class="home_feature_but_right" @click="butRight()"></div>
    </div>
    <div class="home_feature_article fill">
      <div class="home_feature_title font-hongmeng">
        <span>{{ title }}</span>
      </div>
      <div class="home_feature_text font-hongmeng">
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
  <div class="home_feature_but_small fill">
    <div class="home_feature_but_small_left" @click="butLeft()"></div>
    <div class="home_feature_but_small_right" @click="butRight()"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const featureList = ref([
  {
    id: 1,
    img: '/src/assets/轮播图2/fae2a60c4940288d58695b7e0f13436f_3524220739604977780.png',
    title: '双重身份，别样生活',
    text: '街景的平静时光，绳匠的奇异日常'
  },
  {
    id: 2,
    img: '/src/assets/轮播图2/625ac8464638db023d083abe8e6d63ab_6207467845520630293.png',
    title: '承接委托，空洞穿梭',
    text: '小队组合探索空洞，万变迷宫高速激斗'
  },
  {
    id: 3,
    img: '/src/assets/轮播图2/f276ca8617df052fa808deec37895c6f_5531540671162276738.png',
    title: '探寻真相，追逐希望',
    text: '结识各方势力，揭露阴谋诡计'
  },
  {
    id: 4,
    img: '/src/assets/轮播图2/0c49fdc0414cb2a2edbfd74803136890_5821930872712890414.png',
    title: '终末都市后日谈',
    text: '欢迎来到新艾利都！'
  }
])

const currentIndex = ref(0) // 初始化当前索引
const img = ref(featureList.value[currentIndex.value].img)
const title = ref(featureList.value[currentIndex.value].title)
const text = ref(featureList.value[currentIndex.value].text)

const butLeft = () => {
  currentIndex.value--
  reset(currentIndex.value)
}

const butRight = () => {
  currentIndex.value++
  reset(currentIndex.value)
}
const reset = (id) => {
  if (id >= featureList.value.length || id <= 0) {
    currentIndex.value = 0
  }
}
watch(currentIndex, (newIndex) => {
  img.value = featureList.value[newIndex].img
  title.value = featureList.value[newIndex].title
  text.value = featureList.value[newIndex].text
})

onMounted(() => {
  reset
})
</script>

<style lang="scss" scoped>
.home_feature {
  width: 100%;
  height: 7.86rem;
  height: 100%;
  display: flex;
  margin-top: -0.01rem;
  margin-right: 0.02rem;
  overflow: hidden;
  .home_feature_swiper {
    flex-shrink: 0;
  }
  .home_feature_but {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    div {
      width: 0.86rem;
      height: 1.5rem;
      background-image: url('/src/assets/轮播图2/下载 (6).png');
      background-repeat: no-repeat;
      background-size: 50% 50%;
      opacity: 0.6;
      background-position: center;
      cursor: pointer;
    }
    div:hover {
      opacity: 1;
    }
    .home_feature_but_left {
    }
    .home_feature_but_right {
      transform: rotate(180deg);
    }
  }
  .home_feature_article {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('/src/assets/轮播图2/bar.9dcf6df.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 100%;
    div {
      text-align: right;
    }
    .home_feature_title {
      height: 1.74rem;
      font-size: 0.9rem;
      font-weight: bold;
      color: rgba(216, 250, 0, 0.9);
    }
    .home_feature_text {
      width: 100%;
      height: 0.58rem;
      font-size: 0.42rem;
      font-weight: bold;
      color: #080808;
      border-bottom-left-radius: 52px;
    }
    span {
      width: 100%;
      height: 100%;
      padding-right: 1.2rem;
    }
  }
}
.home_feature_but_small {
  width: 1.82rem;
  height: 0.76rem;
  border-radius: 0.38rem;
  background-color: #767678;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1.2rem;
  top: 8.2rem;
  div {
    width: 0.84rem;
    height: 0.6rem;
    background-image: url('/src/assets/轮播图2/下载 (7).png');
    background-size: 100% 100%;
    transition: background-color 0.3s ease;
  }
  div:hover {
    background-image: url('/src/assets/轮播图2/下载 (11).png');
  }
  .home_feature_but_small_left {
  }
  .home_feature_but_small_right {
    transform: rotate(180deg);
  }
}
</style>
