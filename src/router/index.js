/**
 * menuShow 是否在菜单栏显示
 *
 */
import { createRouter, createWebHistory } from 'vue-router';

import IndexRoute from './model/index';
import HomeRoute from './model/home';

const routes = [
  IndexRoute,
  HomeRoute,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      menuShow: false
    }
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('@/views/other/404.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
