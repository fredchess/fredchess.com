import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import ('@/views/blogs/IndexPage.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import ('@/views/HomePage.vue')
    },
  ],
})

export default router
