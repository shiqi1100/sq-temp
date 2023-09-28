<template>
  <component :is="render()"></component>
</template>

<script lang="tsx" setup>
const props = defineProps<{
  count: number
}>()
const emits = defineEmits(['update: count'])
const render = () => {
  return (
    <div>
      <div class="content">count is {props.count}</div>
      <div>
        <button
          onClick={() => {
            emits('update:count', props.count + 1)
          }}
        >
          add
        </button>
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
