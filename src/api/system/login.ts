import http from '@/util/request'
import type { LoginData } from '../type'

type LoginType = {
  userName: string
  passWord: string
  terminaltype: string
  auto: string
}

export const Login = (params: LoginType) =>
  http.postForm<LoginData>('/bdsaas/ajax/main/login.do', params)
