export const userMenuStore = defineStore(
  'menu',
  () => {
    const state = reactive({
      title: ''
    })
    return { state }
  },
  {
    persist: true
  }
)
