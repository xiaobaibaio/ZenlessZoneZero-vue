<template>
  <!-- 固定在页面右侧的导航栏 -->
  <div class="affix fill">
    <el-affix :offset="240"
              style="width: 54px; height: 238px">
      <div class="affix_div">
        <!-- 上下按钮 -->
        <div class="affix_div_up affix_div_but fill"
             @click="affixTop(),but()"
             :class="{imgUrlBut:imgUrlButTop }"></div>
        <div class="affix_div_below affix_div_but fill"
             @click="affixBottom(),but()"
             :class="{imgUrlBut:imgUrlButBottom}"></div>
        <!-- 锚点导航 -->
        <el-anchor class="fill"
                   :marker="false">
          <div class="affix_anchor"
               v-for="item in introduceList"
               :key="item.id">
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


const imgUrlButTop = ref(false)
const imgUrlButBottom = ref(true)

const animationTop = (id) => {
  gsap.to('.affix_anchor', {
    y: -itemId.value * id
  })
}

const animationBottom = (id) => {
  gsap.to('.affix_anchor', {
    y: -itemId.value * id
  })
}

const affixTop = () => {
  if (1 < affixId.value) {
    animationTop(affixId.value-- - 2)
  } else {
    console.log(111)
  }
}

const affixBottom = () => {
  if (affixId.value < introduceListLength.value) {
    animationBottom(affixId.value++)
  } else {
    console.log(111)
  }
}

// 进行判断若id > 1 时向上按钮为true反之为false
// 进行判断id === 数组长度 时向上按钮为false反之为true
const but = () => {
  if (Number(affixId.value) === Number(introduceListLength.value)) {
    imgUrlButBottom.value = false
  } else if (affixId.value > 1) {
    imgUrlButTop.value = true
    imgUrlButBottom.value = true
  } else {
    imgUrlButTop.value = false
  }
}
onMounted(() => {
  animationTop(), animationBottom()
  const body = document.body
  const bodyStyles = window.getComputedStyle(body)
  itemId.value = parseFloat(bodyStyles.fontSize) * 2
  console.log(itemId.value)
  height.value = document.body.scrollHeight
  // nextTick(() => {
  // })
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
    .imgUrlBut {
      background-image: url('../../../assets/固钉/下载 (5).png') !important;
    }
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
      background-image: url('../../../assets/固钉/下载 (4).png');
    }
    .affix_div_up {
    }
    .affix_div_below {
      top: 2rem;
      transform: rotate(180deg);
    }
  }
}

.el-anchor__marker {
  display: none !important;
}
</style>
