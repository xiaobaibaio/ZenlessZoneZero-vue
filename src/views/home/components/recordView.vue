<template>
  <div class="record fill">
    <div class="background_img"></div>
    <a href=""
       class="record_a fill">
      <div class="record_text">
        <div>概念站</div>
        <div class="record_text-title-sub">跳转回顾</div>
      </div>
      <div class="icon_img fill"></div>
      <div class="record_box_television fill">
        <div class="record_play fill"></div>
        <div class="record_television fill"></div>
        <div class="record_cartoon fill"></div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>

<style lang="scss" scoped>
.record {
  width: 6.67rem;
  height: 2.37rem;
  top: 3rem;
  right: 0;
  z-index: 11;
  .background_img {
    width: 6.67rem;
    height: 2.37rem;
    background-image: url('/src/assets/档案/concept-nav.7bc3606.png');
    background-size: 100% 100%;
  }
  .record_a {
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    .record_text {
      width: 3.47rem;
      height: 100%;
      text-align: right;
      font-size: 0.46rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #07040b;
      padding-right: 0.3rem;
      .record_text-title-sub {
        font-size: 0.14rem;
      }
    }
    .icon_img {
      width: 1.2rem;
      height: 0.76rem;
      background-image: url('/src/assets/档案/concept-icon.02e8c67.png');
      background-size: 100% 100%;
      top: 2rem;
      left: 1.9rem;
    }
    .record_box_television {
      width: 3.18rem;
      height: 1.86rem;
      top: 0.2rem;
      left: -1.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .record_play {
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.6rem;
        background-image: url('/src/assets/档案/下载 (14).png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        z-index: 4;
      }
      .record_television {
        width: 100%;
        height: 100%;
        background-image: url('/src/assets/档案/concept-tv.8242ab6.png');
        background-size: 100% 100%;
        z-index: 3;
      }
      .record_cartoon {
        width: 100%;
        height: 100%;
        background-image: url('/src/assets/档案/6360987773eec96ad06bd5037979034a_7429561287467471877.gif');
        background-size: 100% 100%;
        z-index: 2;
      }
    }
  }
}
</style>
