<template>
  <!-- 固定在页面右侧的导航栏 -->
  <div class="affix fill">
    <el-affix :offset="240"
              style="width: 54px; height: 200px">
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
import { ref, defineProps, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

// 接收 introduceList 作为 props
const props = defineProps({
  introduceList: {
    type: Array,
    required: true
  }
})

const introduceListLength = ref(props.introduceList.length)
const affixId = ref(1)
const itemId = ref(130)

//动画点击
const animation = (id) => {
  gsap.to('.affix_anchor', {
    y: -itemId.value * id,
    ease: 'power2.out'
  })
}

//上下点击函数
const affixTop = () => {
  if (1 < affixId.value) {
    animation(affixId.value - 2)
    affixId.value--
    scrollTopY(affixId.value)
  }
}

const affixBottom = () => {
  if (affixId.value < introduceListLength.value) {
    animation(affixId.value)
    affixId.value++
    scrollTopY(affixId.value)
  }
}

//判断是否为第一个或者最后一个
const imgUrlButTop = ref(false)
const imgUrlButBottom = ref(true)

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

let height = ref(0)
const scrollPositions = [0, 970, 1900, 2700, 3500]
const scrollTopY = (id) => {
  if (id >= 1 && id <= scrollPositions.length) {
    window.scrollTo(0, scrollPositions[id - 1])
  }
}

import { useScroll } from "@/utils/useScroll.js"
// import { throttle } from '@/utils/throttle.js' // 导入节流工具
import { debounce } from '@/utils/debounce.js'

const { scrollY } = useScroll()

// 处理滚动事件的函数
const handleScroll = () => {
  const Y = scrollY.value;
  // 根据当前滚动位置 scrollY 更新 affixId 的值
  affixId.value = Y >= 2900 ? 5 :
    Y >= 2100 ? 4 :
      Y >= 1300 ? 3 :
        Y >= 370 ? 2 : 1;
  // 执行对应的动画
  animation(affixId.value - 1);
  but()
};

// 防抖
const debouncedHandleScroll = debounce(handleScroll, 200);

// 监听
onMounted(() => {
  animation()
  height.value = document.body.scrollHeight
  console.log(height.value);
  window.addEventListener('scroll', debouncedHandleScroll);
});

// 移除监听
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll);
});
</script>

<style lang="scss" scoped>
.affix {
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
  right: 0;
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
      cursor: pointer;
    }
    .affix_anchor {
      margin-top: 1.15rem;
      margin-left: -0.2rem;
      transform: rotate(90deg);
      color: #d8fa00;
      font-size: 38px;
      font-weight: bold;
      cursor: default;
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
