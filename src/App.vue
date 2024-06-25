<script setup>
import { ref, onMounted } from "vue"
import navView from '@/components/navView.vue'
import pageFooter from '@/components/pageFooter.vue'

let fals = ref(true)

const load = (window.onload = () => {
  console.log('加载完成')
  fals.value = false
})

onMounted(load)
</script>

<template>
  <LoadPage v-if="fals"></LoadPage>
  <div v-else> <!-- 导航栏 -->
    <navView></navView>
    <RouterView></RouterView>
    <!-- 页脚 -->
    <div class="page_footer fiee">
      <pageFooter></pageFooter>
    </div>
  </div>

</template>

<style scoped lang="scss">
.page_footer {
  background: #111;
}
</style>
