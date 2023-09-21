import http from '@/util/request'
import type { MenuResponseData } from '../type'

export const Getmenu = () =>
  http.postForm<MenuResponseData<any[]>>('/bdsaas/ajax/controlConsole/getmenu.do')
