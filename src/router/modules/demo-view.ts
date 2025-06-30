import type { RouteRecordRaw } from 'vue-router'

const list: Array<RouteRecordRaw> = [
  {
    path: '/demo-view',
    name: 'DemoView',
    component: () => import('@/views/demo-view/DemoView.vue')
  }
]

export default list
