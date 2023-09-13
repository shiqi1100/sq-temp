<template>
  <div class="px-box"></div>

  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div>
    <div class="center">
      <div class="item">555</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.px-box {
  border: 1px solid red;
  width: 375px;
  height: 200px;
}

.center {
  display: grid;
  border: 1px solid gray;
  width: 100px;
  height: 100px;
  place-items: center;
}
</style>
