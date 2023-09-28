<template>
  <dashboard v-model:count="count"></dashboard>
  <rander :title="title" :type="type" @change="change" />
</template>

<script lang="ts" setup>
import dashboard from '../dashboard/dashboard.vue'
import rander from '../dashboard/dashboard'

const count = ref(0)
const title = ref('我是jsx')
const type = ref(1)
const change = (val: string) => {
  console.log(val, 'val')
  title.value = val
  // type.value = 2
}
</script>

<style lang="scss" scoped></style>
