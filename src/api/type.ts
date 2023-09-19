export interface LoginData {
  userInfo: Record<string, any>
  companyId: string
  auth: {
    accessToken: string
  }
}
