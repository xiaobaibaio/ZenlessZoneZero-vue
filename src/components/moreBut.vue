<template>
  <div class="chome-character__main__more font-hongmeng fill">查看更多</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.chome-character__main__more {
  width: min(2.46rem);
  height: 0.76rem;
  padding: 0 0.2rem;
  font-size: 0.24rem;
  font-weight: bolder;
  color: #d6d6d6;
  text-align: center;
  border: 0.08rem solid #767678;
  border-radius: 0.38rem;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0.35rem;
  right: 1.5rem;
  transition: all 300ms;
  z-index: 14;
}
.chome-character__main__more:hover {
  background-color: #fff;
  border: 0.08rem solid #121212;
  color: #121212;
  cursor: pointer;
}
.chome-character__main__more::after {
  margin-left: 0.2rem;
  font-size: 0.2rem;
  font-family: 'icomoon', sans-serif !important;
  content: '＞';
  font-weight: bold;
  color: #d6d6d6;
}
.chome-character__main__more:hover::after {
  color: #121212;
}
</style>
