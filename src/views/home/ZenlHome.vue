<template>
  <div class="">
    <LoadPage v-if="fals"></LoadPage>
    <homeView v-else></homeView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadPage from '@/components/LoadPage.vue'
import homeView from '@/views/home/homeView.vue'

let fals = ref(true)

const load = (window.onload = () => {
  console.log('加载完成')
  fals.value = false
})

onMounted(load)
</script>

<style lang="scss" scoped></style>
