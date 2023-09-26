import type { RouteRecordRaw } from 'vue-router'

const list: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue'),
    redirect: '/vue',
    children: [
      {
        path: '/vue',
        name: 'vue',
        component: () => import('@/views/vue/VueView.vue')
      },
      {
        path: '/react',
        name: 'react',
        component: () => import('@/views/react/ReactView.vue')
      },
      {
        path: '/angular',
        name: 'angular',
        component: () => import('@/views/angular/angularView.vue')
      }
    ]
  }
]

export default list
