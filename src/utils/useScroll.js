// useScroll.js
import { ref, onMounted, onUnmounted } from 'vue';

// 定义一个自定义钩子，用于封装滚动事件监听逻辑
export function useScroll() {
  const scrollY = ref(0); // 用于存储当前滚动位置
  const scrollDirection = ref(''); // 用于存储当前滚动方向

  let lastScrollY = 0; // 用于记录上一次的滚动位置

  // 定义滚动事件的处理函数
  const handleScroll = () => {
    scrollY.value = window.scrollY; // 更新当前滚动位置
    scrollDirection.value = window.scrollY > lastScrollY ? 'down' : 'up'; // 更新滚动方向
    lastScrollY = window.scrollY; // 更新上一次滚动位置
  };

  // 在组件挂载时添加滚动事件监听器
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  // 在组件卸载时移除滚动事件监听器
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  // 返回当前的滚动位置和滚动方向，以便在组件中使用
  return { scrollY, scrollDirection };
}
