<template>
  <div class="h-full">
    <el-container class="h-full flex">
      <el-aside class="h-full bg-slate-400">
        <Menu></Menu>
      </el-aside>
      <el-container class="h-full grow">
        <el-header>
          <div class="w-full h-full flex items-center">
            <el-page-header @back="goBack">
              <template #content>
                <span class="text-large font-600 mr-3">
                  {{ pageTitle }}
                </span>
              </template>
            </el-page-header>
          </div>
        </el-header>
        <el-main class="bg-[#f2f5fa]">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Getmenu } from '@/api/system/menu'
import Menu from '@/views/HomeView/components/Menu.vue'
const router = useRouter()
const route = useRoute()
function getmenuList() {
  return Getmenu().then((res) => {
    console.log(res)
  })
}

const goBack = () => {
  router.back()
}

const pageTitle = computed(() => {
  return route.name
})

onMounted(() => {
  // getmenuList()
})
</script>

<style lang="scss" scoped>
.el-aside {
  width: auto;

  .el-menu:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
}
</style>
