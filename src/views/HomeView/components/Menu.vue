<template>
  <el-menu
    default-active="/vue"
    :default-openeds="['前端三大框架']"
    class="h-full"
    :collapse="isCollapse"
    router
    @open="open"
  >
    <sub-menu :data="menuArr"></sub-menu>
    <div
      class="icon absolute left-1/2 bottom-1 -translate-x-1/2 hover:cursor-pointer hover:text-blue-400"
    >
      <i-ep-ArrowRight v-if="isCollapse" @click="isCollapse = false" />
      <i-ep-ArrowLeft v-else @click="isCollapse = true" />
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { menuArr } from '../index'
import subMenu from './SubMenu.vue'
const isCollapse = ref(false)
</script>
