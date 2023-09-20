import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules/index'
import { userInfoStore } from '@/stores/userInfo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { useInfoData } = userInfoStore()
  console.log(useInfoData)
  if (to.name !== 'login' && !useInfoData.token) next({ name: 'login' })
  // 如果用户未能验证身份，则 `next` 会被调用两次
  else next()
})

export default router
