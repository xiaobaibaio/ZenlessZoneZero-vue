<template>
  <div class="nav">
    <div class="header">
      <div class="logo">
        <a href=""></a>
      </div>
      <div class="list">
        <ul class="list_ul">
          <li class="list" v-for="itme in list" :key="itme">{{ itme.name }}</li>
        </ul>
        <div class="press">
          <div class="m-audio-player" @click="audio_player">
            <img v-show="audio_pause" src="../assets/视频号/下载 (8).png" alt="" />
            <img v-show="audio_play" src="../assets/视频号/下载 (9).png" alt="" />
            <audio ref="audio_welcome" autoplay="autoplay">
              <!-- <source src="../assets/《绝区零》官方网站 —— 世界全剧终，欢迎来到新艾利都！.mp3" /> -->
            </audio>
          </div>
          <div
            class="m-audio-player m-share__panel"
            @mouseenter="share__panel = true"
            @mouseleave="share__panel = false"
          >
            <img src="../assets/视频号/下载 (3).png" alt="" />
            <div class="share__panel" v-show="share__panel">
              <div>
                <span>关注我们</span>
                <ul class="img_ul">
                  <li v-for="item in followUs" :key="item.id">
                    <a href="" @mouseenter="hoveredId = item.id" @mouseleave="hoveredId = null">
                      <img :src="hoveredId === item.id ? item.img : item.imgs" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="m-audio-player"><img src="../assets/视频号/下载 (15).png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
  { name: '首页' },
  { name: '角色介绍' },
  { name: '新闻资讯' },
  { name: '设定档案' }
])
const followUs = ref([
  { id: 1, img: '/src/assets/视频号/wx.png', imgs: '/src/assets/视频号/wx-1.png' },
  { id: 2, img: '/src/assets/视频号/wbo.png', imgs: '/src/assets/视频号/wbo-1.png' },
  { id: 3, img: '/src/assets/视频号/miyou.png', imgs: '/src/assets/视频号/miyou-1.png' },
  { id: 4, img: '/src/assets/视频号/bilbil.png', imgs: '/src/assets/视频号/bilbil-1.png' },
  { id: 5, img: '/src/assets/视频号/tap.png', imgs: '/src/assets/视频号/tap-1.png' },
  { id: 6, img: '/src/assets/视频号/link.png', imgs: '/src/assets/视频号/link-1.png' }
])
const audio_pause = ref(true)
const audio_play = ref(false)
const audio_welcome = ref(null)
const audio_player = () => {
  audio_pause.value = !audio_pause.value
  audio_play.value = !audio_play.value
  audio_pause.value ? audio_welcome.value.pause() : audio_welcome.value.play()
}

const share__panel = ref(false)
const hoveredId = ref(null)
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 1000001;
  width: 100%;
  background-color: #000;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .header {
    width: 19.2rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.56rem;
    .logo {
      width: 2.3rem;
      height: 0.54rem;
      a {
        width: 100%;
        height: 100%;
        display: block;
        background-image: url('../assets/logo-sm.1b88313.svg');
        background-repeat: no-repeat;
      }
    }
    .list {
      display: flex;
      cursor: pointer;
      align-items: center;
      .list_ul {
        height: 0.44rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.2rem;
        font-weight: bold;
        color: #787878;
        li {
          width: 1.24rem;
          height: 0.44rem;
          padding: 0.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 0.6rem;
          transition: transform 0.3s ease;
        }
        .list:hover {
          background: #fff;
          border-radius: 25px;
          color: #000;
          transform: scale(1.12);
        }
      }
      .press {
        width: max(175px);
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
        .m-audio-player {
          width: 0.58rem;
          height: 0.58rem;
          margin-left: 40px;
          img {
            width: 0.58rem;
            height: 0.58rem;
            position: absolute;
          }
        }
        .m-share__panel {
          .share__panel {
            width: 1.66rem;
            position: absolute;
            transform: translate(-30%, 20%);
            background-color: #111;
            border-top: 0.1rem solid #d8fa00;
            border-radius: 0.06rem;
            padding: 0 0.1rem 0.1rem;
            div {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 0.2rem;
              span {
                color: #fff;
                font-size: 0.18rem;
                font-weight: bold;
                text-align: center;
              }
              .img_ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-content: space-between;
                width: 1.66rem;
                height: auto;
                margin-top: 13px;
                li {
                  width: 0.48rem;
                  height: 0.48rem;
                  margin-right: 0.14rem;
                  margin-bottom: 0.14rem;
                  a {
                    width: 100%;
                    height: 100%;
                    display: block;
                  }
                  .img_hover {
                    opacity: 1;
                  }
                  .img_hover:hover {
                    opacity: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
