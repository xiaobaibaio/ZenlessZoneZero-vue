<template>
  <div class="world fiee">
    <div class="world-container">
      <div class="section-nav fill">
        <div class="font_name div_font font-hongmeng">设定档案</div>
        <div class="font_nameEnglish div_font font-mun ">Background</div>
        <div class="font_serial div_font font-mun">05</div>
      </div>
      <div class="world_banner fill">
        <div class="but_felt but fill"></div>
        <div class="card">
          <div v-for="item in cardList"
               :key="item.id"
               class="cardItem">
            <a href="">
              <img :src="item.url"
                   alt=""
                   class="fill card_com">
              <img src="/src/assets/设定档案/轮播图/cover-inner.53b0865.png"
                   alt=""
                   class="fill">
            </a>
          </div>
        </div>
        <div class="but_right but fill"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const cardList = ref([
  { url: '/src/assets/设定档案/轮播图/38c4a256ac7eb596e815149ce07a8edb_576807100612031688.png' },
  { url: '/src/assets/设定档案/轮播图/9a05691e716c42731e1790d723598685_1587141460841627641.png' },
  { url: '/src/assets/设定档案/轮播图/c145189a532ae1793cbe077b90202fef_71338177498891162.png' },
])
</script>

<style lang="scss" scoped>
.world {
  padding-top: 1rem;
  min-height: calc(110vh - 1rem);
  background: url('/src/assets/设定档案/bg.123ba49.jpg') no-repeat center center / cover;
  background-attachment: fixed;
  overflow: hidden;
  .world-container {
    width: 100%;
    height: 11rem;
    display: block;
    z-index: 1;
    background: url('/src/assets/设定档案/inner-top.224793e.png') no-repeat 0 -1rem / 10.3rem 11.6rem;
  }
  .section-nav {
    line-height: 1;
    color: #222122;
    pointer-events: none;
    z-index: 3;
    top: 2.8rem;
    left: -6.9rem;
    width: 9.91rem;
    height: 7.08rem;
    padding-top: 0.38rem;
    background-image: url('/src/assets/设定档案/inner-title.3d621d1.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .div_font {
      margin-left: 7.2rem;
    }
    .font_name {
      font-size: 0.54rem;
      font-weight: bold;
    }
    .font_nameEnglish {
      font-size: 0.24rem;
    }
    .font_serial {
      margin-top: 0.06rem;
      font-size: 1.16rem;
    }
  }
  .world_banner {
    width: 100%;
    height: 100%;
    top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .but {
      background: url('/src/assets/but_wold.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 1.36rem;
      height: 0.94rem;
    }
    .but:hover {
      background-image: url('/src/assets/but_wold_witch.png');
    }
    .but_felt {
      left: 0.4rem;
    }
    .card {
      width: 14.4rem;
      height: 9.7rem;
      // background: #777;
      display: flex;
      .cardItem {
        width: 5.32rem;
        height: 9.7rem;
      }
      a {
        width: 5.32rem;
        height: 9.7rem;
        display: block;
        transform: scale(0.8);
      }
      .card_com {
        z-index: 2;
      }
      img {
        width: 5.32rem;
        height: 9.7rem;
        object-fit: cover;
      }
    }
    .but_right {
      right: 0;
      transform: rotate(180deg);
    }
  }
}
</style>
