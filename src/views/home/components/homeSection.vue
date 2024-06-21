<template>
  <section class="home-section">
    <div :class="{ fill_transform: fill }" class="fill fill_bg">
      <img src="../../../assets/banner/fill-bg.c5ecc5f.png" alt="text" />
    </div>
    <div :class="{ fill_transform: fill }" class="fill fill_text">
      <img src="../../../assets/banner/fill-text.b4d7ce4.png" alt="text" />
    </div>
    <div class="banner fill">
      <div class="banner_img_home fill">
        <img
          src="../../../assets/banner/37198ce9c5ee13abb2c49f1bd1c3ca97_7702488080246216541.png"
          alt=""
        />
        <div class="banner_img_reserve fill">
          <div class="banner_reserve">
            <img
              src="../../../assets/banner/d223d9ae5c37bf0f3151108b4f4acf1b_738017132473846163.png"
              alt=""
            />
            <div class="banner_img_overbook font-hongmeng fill">
              全平台预约人数：<span>{{ overbook }}</span>
            </div>
          </div>
        </div>
        <div class="banner_list_play_video">
          <div class="banner_play_video"></div>
          <div class="banner_age">
            <img
              src="../../../assets/banner/fde5edcc28d0a26087a5ee10adbad529_1429746946814537313.png"
              alt=""
            />
          </div>
          <div class="banner_serial"><img src="../../../assets/banner/下载.png" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const fill = ref(false)
//预约人数
const overbook = ref(11121212)
</script>

<style lang="scss" scoped>
.fill_bg {
  width: 14.42rem;
  top: 2.32rem;
}
.fill_text {
  width: 1.65rem;
  top: 0.1rem;
  right: 1.56rem;
}
.banner {
  width: 100vw;
  height: min(15.37rem);
  z-index: 1000000;
  display: flex;
  justify-content: center;
  transition: all 0.1s;
  .banner_img_home {
    width: 19.2rem;
    height: auto;
    z-index: 1;
    .banner_img_reserve {
      width: 4.43rem;
      height: 2.49rem;
      z-index: 1000000;
      top: 0.98rem;
      right: 0.8rem;
      .banner_img_overbook {
        width: 2.46rem;
        height: 0.24rem;
        top: 1.9rem;
        left: 0.64rem;
        transform: rotate(12deg);
        color: #fff;
        font-size: 0.18rem;
        font-weight: bold;
      }
    }
    .banner_reserve:hover {
      transform: scale(1.1);
    }
    .banner_img_reserve:hover {
      animation-duration: 1.5s;
      animation-name: reserve;
    }
    @keyframes reserve {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(5deg);
      }
      30% {
        transform: rotate(0deg);
      }
      35% {
        transform: rotate(5deg);
      }
      40% {
        transform: rotate(0deg);
      }
      45% {
        transform: rotate(5deg);
      }
      50% {
        transform: rotate(0deg);
      }
      55% {
        transform: rotate(5deg);
      }
    }
    .banner_list_play_video {
      position: absolute;
      top: 4.18rem;
      left: 0.9rem;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      .banner_play_video {
        width: 0.8rem;
        height: 0.8rem;
        background-image: url('../../../assets/banner/视频播放/下载 (16).png');
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .banner_play_video:hover {
        background-image: url('../../../assets/banner/视频播放/下载 (17).png');
      }
      .banner_age {
        width: 0.75rem;
        margin-top: 0.45rem;
      }
      .banner_serial {
        width: 0.16rem;
        margin-top: 0.52rem;
      }
    }
  }
}
</style>
