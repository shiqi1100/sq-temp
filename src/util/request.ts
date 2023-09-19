import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { userInfoStore } from '@/stores/userInfo'
type ResponseDataWrapper<T = any> = {
  data: T
  rspCode: number
  rspMsg: string | null
}
class AxiosHttp {
  private readonly instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: '/bdsaas/ajax',
      timeout: 10000
    })
    this.initInterceptors()
  }

  initInterceptors() {
    const { useInfoData } = userInfoStore()
    console.log(useInfoData)
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      function(config) {
        config.data.token = useInfoData.token || ''
        config.data.COMPANYID = useInfoData.companyId || ''
        // 在发送请求之前做些什么
        return config
      },
      function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      function(response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response
      },
      function(error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }

  request<T = any, R = ResponseDataWrapper<T>>(config: AxiosRequestConfig) {
    return new Promise<R>((resolve, reject) => {
      this.instance
        .request<R>(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}) {
    config = {
      url,
      params,
      method: 'GET',
      ...config
    }
    return this.request<T>(config)
  }

  post<T = any>(url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}) {
    config = {
      url,
      data,
      method: 'POST',
      ...config
    }
    return this.request<T>(config)
  }
  postForm<T = any>(url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}) {
    config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url,
      data,
      method: 'POST',
      ...config
    }
    return this.request<T>(config)
  }

  postJson<T = any>(url: string, data: Record<string, any> = {}, config: AxiosRequestConfig = {}) {
    config = {
      headers: {
        'Content-Type': 'application/json'
      },
      url,
      data,
      method: 'POST',
      ...config
    }
    return this.request<T>(config)
  }
}

export default new AxiosHttp()
