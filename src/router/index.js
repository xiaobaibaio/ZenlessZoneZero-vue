import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'Main'
    },
    {
      path: '/Main',
      name: 'Main',
      component: () => import('@/views/home/homeView.vue')
    },
    {
      path: '/Character',
      name: 'Character',
      component: () => import('@/views/character/characterView.vue')
    },
    {
      path: '/News',
      name: 'News',
      component: () => import('@/views/news/newsView.vue')
    },
    {
      path: '/World',
      name: 'World',
      component: () => import('@/views/world/worldView.vue')
    }
  ]
})

export default router
