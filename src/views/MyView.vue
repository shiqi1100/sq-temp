<template>
  <div class="px-box"></div>

  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div>
    <div class="center">
      <!-- <div class="item">{{ x }}{{ y }}</div> -->
    </div>
  </div>
  <div ref="el" :style="style" style="position: fixed">
    <div>{{ formatted }}</div>
  </div>
  <div>
    <button @click="throttledFn">防抖{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
type P = 'default' | 'app'

function name<T extends P>(params: T): T {
  return params
}
console.log(name('default'))
const el = ref<HTMLElement | null>(null)
const count = ref(0)
// const {x,y} = useMouse()
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 }
})
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
const throttledFn = useThrottleFn(() => {
  // do something, it will be called at most 1 time per second
  count.value++
}, 1000)
const original = ref({ key: 'value' })

const { cloned } = useCloned(original)

cloned.value.key = 'some new value'

console.log(cloned.value.key) // 'some new value'
console.log(original.value.key) // 'value'
console.log('合并一下试试')
const state = useStorage('my-store', { hello: 'hi', greeting: 'Hello' })
console.log(state.value, 'state')
</script>

<style scoped lang="scss">
.px-box {
  border: 1px solid red;
  width: 375px;
  height: 200px;
}

.center {
  display: grid;
  border: 1px solid gray;
  width: 120px;
  height: 100px;
  place-items: center;
}
</style>
