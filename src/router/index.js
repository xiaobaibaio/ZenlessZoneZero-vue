import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  redirect: 'Main',
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: () => import('@/views/home/ZenlHome.vue')
    },
    // {
    //   path: '/spin',
    //   name: 'spin',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/components/spinView.vue')
    // }
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
