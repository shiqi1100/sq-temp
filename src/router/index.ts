import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules/index'
import { userInfoStore } from '@/stores/userInfo'
import { start, done } from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  start()
  next()
  // const { useInfoData } = userInfoStore()
  // if (to.name !== 'login' && !useInfoData.token) next({ name: 'login' })
  // // 如果用户未能验证身份，则 `next` 会被调用两次
  // else next()
})

router.afterEach((to, from) => {
  done()
})

export default router
