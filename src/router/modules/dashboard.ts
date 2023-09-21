import type { RouteRecordRaw } from 'vue-router'

const list: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/dashboard.vue')
  }
]

export default list
