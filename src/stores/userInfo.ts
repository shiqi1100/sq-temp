export const userInfoStore = defineStore(
  'main',
  () => {
    const useInfoData = reactive({
      userInfo: {},
      token: '',
      companyId: '',
      profileId: '',
      realName: ''
    })
    return { useInfoData }
  },
  {
    persist: true
  }
)
