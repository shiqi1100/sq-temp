<template>
  <div class="h-full">
    <el-container class="h-full flex">
      <el-aside class="h-full bg-slate-400">
        <Menu></Menu>
      </el-aside>
      <el-container class="h-full grow">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { userInfoStore } from '@/stores/userInfo'
import Menu from '@/views/HomeView/components/Menu.vue'
const { useInfoData } = userInfoStore()

onMounted(() => {
  console.log(useInfoData)
})
</script>

<style lang="scss" scoped>
.el-aside {
  width: auto;
}
</style>
