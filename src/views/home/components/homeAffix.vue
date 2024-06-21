<template>
  <!-- 固定在页面右侧的导航栏 -->
  <div class="affix fill">
    <el-affix :offset="240" style="width: 54px; height: 238px">
      <div class="affix_div">
        <!-- 上下按钮 -->
        <div class="affix_div_up affix_div_but fill" @click="affixRight"></div>
        <div class="affix_div_below affix_div_but fill" @click="affixLeft"></div>
        <!-- 锚点导航 -->
        <el-anchor class="fill" :marker="false">
          <div class="affix_anchor" v-for="item in introduceList" :key="item.id">
            {{ item.serial }}
          </div>
        </el-anchor>
      </div>
    </el-affix>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import gsap from 'gsap'

// 接收 introduceList 作为 props
const props = defineProps({
  introduceList: {
    type: Array,
    required: true
  }
})
let height = ref(0)
const introduceListLength = ref(props.introduceList.length)
const affixId = ref(1)
const itemId = ref()

const animationLeft = (id) => {
  gsap.to('.affix_anchor', {
    y: -itemId.value * id
  })
}

const animationRight = (id) => {
  gsap.to('.affix_anchor', {
    y: itemId.value * id
  })
  console.log(itemId.value * id)
}

const affixRight = () => {
  if (1 < affixId.value) {
    animationRight(affixId.value++)
  } else {
    console.log(111)
  }
}

const affixLeft = () => {
  if (affixId.value < introduceListLength.value) {
    animationLeft(affixId.value++)
  } else {
    console.log(111)
  }
}
onMounted(() => {
  const body = document.body
  const bodyStyles = window.getComputedStyle(body)
  itemId.value = parseFloat(bodyStyles.fontSize) * 2
  console.log(itemId.value)
  console.log(bodyStyles.fontSize)
  height.value = document.body.scrollHeight
  console.log(height.value)
  console.log(introduceListLength.value)
})
</script>

<style lang="scss" scoped>
.affix {
  width: 100vw;
  height: 238px;
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
  .affix_div {
    background-color: #000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 2.6px solid #646464;
    border-right: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    .affix_anchor {
      margin-top: 1.15rem;
      margin-left: -0.2rem;
      transform: rotate(90deg);
      color: #d8fa00;
      font-size: 0.6rem;
      font-weight: bold;
    }
    .affix_div_but {
      width: 24px;
      height: 30px;
      background-size: 100%;
      background-repeat: no-repeat;
      margin: 0.1rem 0;
      z-index: 11111;
    }
    .affix_div_up {
      background-image: url('../../../assets/固钉/下载 (4).png');
    }
    .affix_div_below {
      top: 2rem;
      background-image: url('../../../assets/固钉/下载 (5).png');
      transform: rotate(180deg);
    }
  }
}

.el-anchor__marker {
  display: none !important;
}
</style>
