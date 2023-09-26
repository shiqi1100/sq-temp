<template>
  <div class="h-full">
    <el-container class="h-full flex">
      <el-aside class="h-full bg-slate-400">
        <Menu></Menu>
      </el-aside>
      <el-container class="h-full grow">
        <el-header>
          <div class="w-full h-full flex">
            <div
              class="flex justify-center items-center cursor-pointer hover:text-[#0056ff] text-[20px]"
            >
              <div>&lt;&nbsp;</div>
              <div>vue</div>
            </div>
            <div></div>
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

function getmenuList() {
  return Getmenu().then((res) => {
    console.log(res)
  })
}

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
