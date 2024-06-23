<script setup>
import navView from '@/components/navView.vue'
import pageFooter from '@/components/pageFooter.vue'
</script>

<template>
  <!-- 导航栏 -->
  <div>
    <navView></navView>
  </div>
  <RouterView></RouterView>
  <!-- 页脚 -->
  <div class="page_footer fiee">
    <pageFooter></pageFooter>
  </div>
</template>

<style scoped lang="scss">
.page_footer {
  background: #111;
}
</style>
