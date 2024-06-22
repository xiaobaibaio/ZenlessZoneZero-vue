<template>
  <div class="fill_character fill">
    <img class="fill_character_packaging fill"
         src="../../../assets/人物/边/fill-bar.e05cd19.png"
         alt="" />
    <img class="fill_character_black"
         src="../../../assets/人物/边/fill-black-right.53dad41.png"
         alt="" />
  </div>

  <div class="fill_background fill">
    <img src="../../../assets/人物/边/fill-black-short.af5371b.png"
         alt="" />
  </div>
  <div class="fill_introduce fill">
    <slot name="introduce"></slot>
  </div>
  <div class="home-character__main fill">
    <div class="home-character_img">
      <slot name="figureSwiper"></slot>
      <slot name="featureSwiper"></slot>
      <slot name="moreBut"></slot>
    </div>

    <div></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fill_character {
  width: 9.48rem;
  z-index: 1;
  right: 0;
  top: -2.86rem;
  .fill_character_black {
    width: 100%;
    display: inline-block;
  }
  .fill_character_packaging {
    width: 12.4rem;
    display: inline-block;
    top: -0.8rem;
    left: -2.6rem;
    transform: rotate(-2deg);
  }
}
.fill_background {
  width: 25.62rem;
  z-index: 4;
  left: -0.01rem;
}
.fill_introduce {
  width: 8.45rem;
  height: 11rem;
  background-color: rgb(216, 250, 0);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.home-character__main {
  width: 20.64rem;
  height: 7.86rem;
  z-index: 20;
  border-radius: 52px;
  top: 4.4rem;
  right: -0.5rem;
  background-image: url('../../../assets/人物/chara-panel-bg.86c2c99.png');
  background-size: 100% 100%;
  .home-character_img {
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/人物/chara-panel.20d68d6.png');
    background-size: 100% 100%;
    border-radius: 52px;
    background-repeat: no-repeat;
  }
}
</style>
