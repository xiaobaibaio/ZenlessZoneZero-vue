<template>
  <div class="spin">
    <div class="spin_screen">
      <img src="../assets/phone.png" alt="" />
      <span>了更好的体验，请将手机/平板竖过来</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>

<style lang="scss" scoped>
.spin {
  width: 100vw;
  height: 100vh;
  background-color: #32373b;
  display: flex;
  justify-content: center;
  align-items: center;
  .spin_screen {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 138px;
      height: 194px;
      transform: rotate(90deg);
    }
    span {
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
