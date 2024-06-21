<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import imgPath from '@/assets/ce1888e31d79d6d4b2f4ad9b25fbbd68_115427045797695536.png'

//获取canvas
const canvasRef = ref(null)

const loadAndImg = () => {
  const canvas = canvasRef.value
  //如果不是canvas就结束
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  //画布最大 宽高
  const maxWidth = 265
  const maxHeight = 150 // 修改画布的高度

  //设置画布大小
  const setCanvasSize = () => {
    canvas.width = maxWidth
    canvas.height = maxHeight
  }

  //在窗口大小改变时调整画布大小
  const onResize = () => {
    setCanvasSize()
    if (img.complete) {
      // 重新绘制图片，以适应新的画布尺寸
      drawFrame()
    }
  }

  // 初始化
  setCanvasSize()
  window.addEventListener('resize', onResize)

  // 加载图片
  const img = new Image()
  img.src = imgPath

  let totalFrames = 0 //表示图像被切割成多少帧
  let currentFrame = 0 //表示当前应该绘制第几帧图像

  //计算缩放比例
  const drawFrame = () => {
    //清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // X && Y 坐标
    const sourceX = 0
    const sourceY = (currentFrame * img.height) / totalFrames
    //图片中裁剪的宽度和高度
    const sourceWidth = img.width
    const sourceHeight = img.height / totalFrames

    // 计算缩放比例和偏移
    const scale = Math.min(canvas.width / sourceWidth, canvas.height / sourceHeight)
    const destWidth = sourceWidth * scale
    const destHeight = sourceHeight * scale
    const destX = (canvas.width - destWidth) / 2
    const destY = (canvas.height - destHeight) / 2

    // 使用 drawImage 函数绘制图片，使其等比例缩放并居中显示
    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      destX,
      destY,
      destWidth,
      destHeight
    )

    currentFrame = (currentFrame + 1) % totalFrames
  }

  img.onload = () => {
    //总帧数
    totalFrames = Math.floor(img.height / maxHeight)
    gsap.to(
      {},
      {
        repeat: -1,
        duration: 0.3 / 24, // 修改动画的持续时间
        onRepeat: drawFrame //播放动画
      }
    )
  }

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
}

onMounted(loadAndImg)
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  canvas {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
