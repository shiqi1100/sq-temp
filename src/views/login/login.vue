<template>
  <div
    class="w-full h-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
  >
    <div class="w-[500px] p-1 border rounded-[12px] bg-white">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
        <div class="flex justify-center font-bold py-[8px] text-[26px]">登录</div>
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElNotification, type FormInstance, type FormRules } from 'element-plus'
import { Login } from '@/api/system/login'
import { userInfoStore } from '@/stores/userInfo'
const { useInfoData } = userInfoStore()

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  pwd: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ required: true, trigger: 'blur' }],
  pwd: [{ required: true, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const params = {
        userName: ruleForm.name,
        passWord: ruleForm.pwd,
        terminaltype: 'WEB',
        auto: '0'
      }
      Login(params)
        .then((res) => {
          if (res.rspCode !== 0) {
            return ElNotification({
              title: '提醒',
              message: res.rspMsg || '登录失败',
              type: 'warning'
            })
          }
          useInfoData.token = res.data.auth.accessToken || ''
          useInfoData.companyId = res.data.companyId || ''
          router.replace({ name: 'home' })
        })
        .catch((err) => console.log(err))
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
