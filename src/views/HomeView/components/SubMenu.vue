<template>
  <div>
    <template v-for="(item, index) in props.data" :key="index">
      <el-sub-menu v-if="item.children.length > 0" :index="item.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <sub-menu :data="item.children"></sub-menu>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :disabled="!item.meta.hiddle">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Location } from '@element-plus/icons-vue'

const props = defineProps<{
  data: any[]
}>()

console.log(props.data)
</script>
<style lang="scss">
/* 隐藏文字 */
.el-menu--collapse .el-sub-menu .el-sub-menu__title span {
  display: none;
}

/* 隐藏 > */
.el-menu--collapse .el-sub-menu .el-sub-menu__title .el-sub-menu__icon-arrow {
  display: none;
}
</style>
