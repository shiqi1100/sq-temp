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
  title.value = val
  // type.value = 2
}

const person = { name: 'kevin', age: 18 }
type person1 = { name: string; age: number }
type Kevin = typeof person
type P = keyof Kevin

const arr = [1, 2, 3, 4, 5] // todo

const obj = { name: '测试' }

function changeObjValue<T, U extends Extract<keyof T, string>>(obj: T, value: U) {
  return obj[value]
}
function changeObjValue1<T, U extends keyof T>(obj: T, value: U) {
  return obj[value]
}
console.log(changeObjValue(person, 'age'))

console.log('demo 1')
changeObjValue1(person, 'age')
</script>

<style lang="scss" scoped></style>
