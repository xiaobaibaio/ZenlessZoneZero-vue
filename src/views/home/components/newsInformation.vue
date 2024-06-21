<template>
  <div class="home_news">
    <div class="home_swiper fiee">
      <slot name="journalismSwiper"><img :src="img" alt="" /></slot>
    </div>
    <div class="introduce fill"><slot name="introduce"></slot></div>
  </div>
  <slot name="recordView"></slot>
</template>

<script setup>
import { ref } from 'vue'
const img = ref('/src/assets/档案/7dc8e490e0e15e0656458003241b94ad_8371389282001677330.png')
</script>

<style lang="scss" scoped>
.home_news {
  width: 19.2rem;
  padding-top: 1.14rem;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  .home_swiper {
    width: 9.4rem;
    height: 5.3rem;
    margin-right: 2rem;
    margin-left: 3rem;
    border-radius: 0.54rem;
    background: #999;
  }
  .home_swiper_introduce {
    right: 5.3rem;
  }
  .introduce {
    right: 5rem;
  }
}
</style>
