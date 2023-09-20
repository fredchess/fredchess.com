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
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;

    if (to.hash) return { el: to.hash, top: 0 };

    return { top: 0 };
  }
})

export default router
