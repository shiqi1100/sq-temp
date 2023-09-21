import { userInfoStore } from '@/stores/userInfo'
import type { InternalAxiosRequestConfig } from 'axios'

export function interceptor(config: InternalAxiosRequestConfig<any>) {
  const { useInfoData } = userInfoStore()
  config.data.token = useInfoData.token || ''
  config.data.COMPANYID = useInfoData.companyId || ''
  Object.assign(config.headers, {
    Authorization: `Bearer ${useInfoData.token}`
  })
  return config
}
