<template>
  <div>test</div>
  <my-view></my-view>
  <hello-world></hello-world>
</template>

<script lang="ts" setup>
import MyView from './MyView.vue'

onMounted(() => {})
nextTick(() => {})
const a = ref(null)
console.log(a)
</script>

<style lang="scss" scoped></style>
