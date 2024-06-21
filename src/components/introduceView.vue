<template>
  <div v-if="currentIntroduce" class="fill_introduce_list">
    <div class="fill_introduce_name font-mun">{{ currentIntroduce.name }}</div>
    <div class="fill_introduce_Character font-mun">{{ currentIntroduce.nameEnglish }}</div>
    <div class="fill_introduce_serial font-mun">{{ currentIntroduce.serial }}</div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// 定义 props 接收 introduceList 数组
const props = defineProps({
  introduceList: {
    type: Array,
    default: () => [] // 默认空数组
  },
  id: {
    type: Number,
    required: true
  }
})

// 计算属性筛选当前的介绍项
const currentIntroduce = computed(() => {
  // 添加对 introduceList 是否存在的检查
  if (!props.introduceList) return {}
  return props.introduceList.find((item) => item.id === props.id) || {}
})
</script>

<style lang="scss" scoped>
.fill_introduce_list {
  width: 5.24rem;
  color: #222122;
  margin-top: -1rem;
  margin-right: -0.7rem;
  text-transform: uppercase;
  .fill_introduce_name {
    font-size: 0.6rem;
    font-weight: bold;
  }
  .fill_introduce_Character {
    font-size: 0.4rem;
  }
  .fill_introduce_serial {
    font-size: 1.86rem;
  }
}
</style>
