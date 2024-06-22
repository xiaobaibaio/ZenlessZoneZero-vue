<template>
  <div class="home">
    <!-- 导航栏 -->
    <div>
      <navView></navView>
    </div>
    <div>
      <!-- 固钉 -->
      <section class="fill"
               style="z-index: 1111111">
        <Affix :introduceList="introduceList" />
      </section>
      <!-- 主体banner -->
      <section class="home-section"
               id="affix-1">
        <Section></Section>
      </section>
      <!-- 人物列表 -->
      <section class="home-character"
               id="affix-2">
        <slideshow>
          <template v-slot:introduce>
            <introduceView :introduceList="introduceList"
                           :id="2"></introduceView>
          </template>
          <template v-slot:moreBut>
            <moreBut></moreBut>
          </template>
          <template v-slot:figureSwiper>
            <figureSwiper></figureSwiper>
          </template>
        </slideshow>
      </section>
      <!-- 新闻列表 -->
      <section class="newsInformation Zindex"
               id="affix-3">
        <newsInformation>
          <template v-slot:introduce>
            <introduceView :introduceList="introduceList"
                           :id="3"></introduceView>
          </template>
          <template v-slot:journalismSwiper>
            <journalismSwiper></journalismSwiper>
          </template>
        </newsInformation>
      </section>
      <!-- 游戏特色 -->
      <section class="home-character absolute_top"
               id="affix-4">
        <slideshow class="absolute_top">
          <template v-slot:introduce>
            <introduceView :introduceList="introduceList"
                           :id="4"></introduceView>
          </template>
          <template v-slot:moreBut>
            <featureSwiper></featureSwiper>
          </template>
        </slideshow>
      </section>
      <!-- 设定档案 -->
      <section class="newsInformation absolute_top"
               id="affix-5">
        <newsInformation>
          <template v-slot:introduce>
            <introduceView :introduceList="introduceList"
                           :id="5"></introduceView>
          </template>
          <template v-slot:recordView>
            <recordView></recordView>
          </template>
        </newsInformation>
      </section>
    </div>
    <!-- 页脚 -->
    <div class="page_footer fiee">
      <pageFooter></pageFooter>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import navView from '@/components/navView.vue'
import pageFooter from '@/components/pageFooter.vue'
import Affix from '@/views/home/components/homeAffix.vue'
import Section from '@/views/home/components/homeSection.vue'
import slideshow from '@/views/home/components/slideshowView.vue'

import newsInformation from '@/views/home/components/newsInformation.vue'
import introduceView from '@/components/introduceView.vue'
import moreBut from '@/components/moreBut.vue'

import figureSwiper from '@/views/home/components/figureSwiper.vue'
import journalismSwiper from '@/views/home/components/journalismSwiper.vue'
import featureSwiper from '@/views/home/components/featureSwiper.vue'
import recordView from '@/views/home/components/recordView.vue'

const introduceList = ref([
  { id: 1, name: '角色介绍', nameEnglish: 'Character', serial: '01' },
  { id: 2, name: '角色介绍', nameEnglish: 'Character', serial: '02' },
  { id: 3, name: '新闻中心', nameEnglish: 'Latest News', serial: '03' },
  { id: 4, name: '游戏特色', nameEnglish: 'Feature', serial: '04' },
  { id: 5, name: '设定档案', nameEnglish: 'Background', serial: '05' }
])

//表示是否页面已滚动
const isVisible = ref(false)

//标记用户是否已经滚动过
const hasScrolled = ref(false)

// 函数：处理页面滚动事件
const handleScroll = () => {
  // 检查是否已经滚动过
  if (!hasScrolled.value) {
    hasScrolled.value = true
    isVisible.value = true
    // 移除滚动事件监听器，确保只处理首次滚动
    window.removeEventListener('scroll', handleScroll)
  }
}

// Vue 生命周期钩子：组件挂载时执行
onMounted(() => {
  // 添加滚动事件监听器，绑定到 handleScroll 函数
  window.addEventListener('scroll', handleScroll)
})

// Vue 生命周期钩子：组件卸载时执行
onUnmounted(() => {
  // 移除滚动事件监听器，避免内存泄漏
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  overflow-block: scroll;
  section {
    position: relative;
  }
  .Zindex {
    z-index: 4;
  }
  .absolute_top {
    top: 2rem;
  }
  .home-section {
    width: 100vw;
    height: min(15.37rem);
    padding: 0.5rem 0;
  }
  .home-character {
    width: 100vw;
    display: inline-block;
    padding-top: 1.4rem;
  }
  .newsInformation {
    height: auto;
    margin-top: 14.4rem;
  }
  .page_footer {
    top: 4.27rem;
    background: #111;
  }
}
</style>
