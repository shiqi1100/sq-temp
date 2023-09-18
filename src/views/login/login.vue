<template>
  <div class="login-main">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <div style="color: black" class="py-[10px] font-bold flex justify-center">登录</div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loginForm = ref({
  username: 'sange',
  password: '123456'
})
const loginRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const login = () => {
  // 处理登录逻辑，例如发送登录请求到服务器验证用户信息
  // ...
}
</script>

<style scoped lang="scss">
.login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #303030;
  flex-direction: column;

  .login-form {
    border-radius: 12px;
    padding: 16px;
    width: 300px;
    background-color: #fff;
  }
}
</style>
