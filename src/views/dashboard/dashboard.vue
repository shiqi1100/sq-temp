<template>
  <component :is="render()"></component>
</template>

<script lang="tsx" setup>
const props = defineProps<{
  count: number
}>()
const render = () => {
  return (
    <div>
      <div class="content">count is {props.count}</div>
      <div>
        <button>add</button>
      </div>
    </div>
  )
}
</script>

<style lang="scss" scoped>
.content {
  color: red;
}
</style>
