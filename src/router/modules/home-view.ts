import type { RouteRecordRaw } from 'vue-router'

const list: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue')
  }
]

export default list
