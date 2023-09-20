export interface Params {
  token: string
  COMPANYID: string
}

export interface LoginData {
  userInfo: Record<string, any>
  companyId: string
  auth: {
    accessToken: string
  }
}

export interface MenuResponseData<T> {
  shortcut: T
}
