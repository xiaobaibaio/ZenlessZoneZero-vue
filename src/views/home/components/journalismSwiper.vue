<template>
  <div class="jiurnalism_ul">
    <div
      class="jiurnalism_swiper"
      ref="jiurnalism_swiper"
      v-for="item in jiurnalismList"
      :key="item"
      :id="item.id"
    >
      <img :src="item.img" alt="" />
    </div>
  </div>
  <div class="jiurnalism_text">
    <div class="text font-hongmeng">{{ text }}</div>
  </div>
  <div class="jiurnalism__info font-hongmeng">
    <div>{{ time }}</div>
    <div class="jiurnalism__info_copyWriter">{{ copyWriter }}</div>
  </div>

  <div class="jiurnalism_ol">
    <div
      class="jiurnalism_item"
      v-for="id in jiurnalismList"
      :key="id.id"
      :id="id.id"
      @click="jiurnalismClick(id)"
    >
      <span :class="index == id.id ? 'background_color_yellow' : ''"></span>
    </div>
    <div class="moreBut_top fill">
      <moreBut></moreBut>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import moreBut from '@/components/moreBut.vue'
import gsap from 'gsap'

const jiurnalismList = ref([
  {
    id: 1,
    name: '幻想',
    img: '/src/assets/新闻/幻想.png',
    time: '06/11/2024',
    copyWriter: '过塑手账丨仍有优雅的空间',
    text: '面对换季的掉毛，优雅的执事都不会退缩。'
  },
  {
    id: 2,
    name: '拉面',
    img: '/src/assets/新闻/拉面.png',
    time: '06/11/2024',
    copyWriter: '《绝区零》全球预约人数突破4000万！',
    text: '预约里程碑奖励现均已解锁，感谢绳匠们的支持，也期待即将到来的见面！'
  },
  {
    id: 3,
    name: '建设-1',
    img: '/src/assets/新闻/建设-1.png',
    time: '06/10/2024',
    copyWriter: '端午计划丨粽拳出击！',
    text: '近期治安局开启了新一轮违章搭建的专项整治行动…温馨提示市民朋友们：文明过节，人人有责。'
  },
  {
    id: 4,
    name: '探店',
    img: '/src/assets/新闻/探店.png',
    time: '06/08/2024',
    copyWriter: '新艾利都探店 | 这只报刊亭在六分街没有对手！',
    text: '「嗷呜」立耳实在太乖了啊！路过看了一眼，直接被硬控30秒。'
  },
  {
    id: 5,
    name: '家政',
    img: '/src/assets/新闻/家政.jpeg',
    time: '06/07/2024',
    copyWriter: '维多利亚家政，期待您的指名。',
    text: '为了更加了解潜在客人们的需求，维多利亚家政决定推出私人定制一日体验服务。'
  },
  {
    id: 6,
    name: '建设',
    img: '/src/assets/新闻/建设.png',
    time: '06/06/2024',
    copyWriter: '过塑手账丨兄弟爆一下',
    text: '这次爆破行动的搭档。兄弟，非你莫属！'
  }
])

// 动态渲染class样式默认为第一个（1）
const time = ref('04/06/2024')
const copyWriter = ref('过塑手账丨仍有优雅的空间')
const index = ref(1)
const text = ref('面对换季的掉毛，优雅的执事都不会退缩。')

const jiurnalism_swiper = ref(null)
const width = ref(null)

// 轮播图滑动特效
const jiurnalismGsap = (id) => {
  gsap.to('.jiurnalism_swiper', {
    x: -width.value * (id - 1)
  })
}
const textAnimation = () => {
  const textWidth = document.querySelector('.text').offsetWidth
  gsap.fromTo(
    '.text',
    { x: width.value },
    { x: -textWidth, duration: 20, repeat: -1, ease: 'linear' }
  )
}

// 点击后更新下标值
const jiurnalismClick = (id) => {
  index.value = id.id
  copyWriter.value = id.copyWriter
  time.value = id.time
  text.value = id.text
  jiurnalismGsap(id.id)
  textAnimation()
}

onMounted(() => {
  nextTick(() => {
    if (jiurnalism_swiper.value[0]) {
      // 确保 ref 引用的 DOM 元素存在后再访问其属性
      width.value = jiurnalism_swiper.value[0].offsetWidth
      textAnimation()
      console.log(jiurnalism_swiper.value[0].offsetWidth)
    } else {
      console.error('jiurnalism_swiper.value[0] is undefined')
    }
  })
})
</script>

<style lang="scss" scoped>
.jiurnalism_ul {
  width: 9.4rem;
  height: 90%;
  display: flex;
  overflow: hidden;
  border-top-left-radius: 0.54rem;
  border-top-right-radius: 0.54rem;
  .jiurnalism_swiper {
    width: 100%;
    height: 100%;
    display: block;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.jiurnalism_text {
  font-size: 0.4rem;
  color: rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 0.54rem;
  border-bottom-right-radius: 0.54rem;
  background-color: #000;
  overflow: hidden;
  .text {
    display: inline-block;
    white-space: nowrap;
    font-style: oblique;
    font-weight: bold;
  }
}
.jiurnalism__info {
  margin-top: 0.38rem;
  margin-bottom: 0.3rem;
  min-height: 0.76rem;
  font-size: 0.24rem;
  .jiurnalism__info_copyWriter {
    font-weight: bolder;
  }
}
.jiurnalism_ol {
  display: flex;
  .jiurnalism_item {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.32rem;
    cursor: pointer;
    .background_color_yellow {
      background-color: #ffff00;
    }
    span {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      background-color: #323333;
      border: 0.08rem solid #000;
      transition: background-color 0.3s ease;
    }
  }
  .moreBut_top {
    right: -1.5rem;
    bottom: -2.1rem;
  }
}
</style>
