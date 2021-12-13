<template>
  <!-- 登录主体 -->
  <div class="login_container">
    <!-- 头像区 -->
    <div class="login_avatar">
      <img src="../assets/Yunjiang.jpg" alt="" />
    </div>
    <!-- 表单区 -->
    <el-form class="login_form" :model="loginForm"  ref="loginFormRef" label-width="80px">
      <el-form-item label="账号：" prop="username">
        <el-input
          placeholder="请输入账号"
          v-model="loginForm.username"
          prefix-icon="el-icon-user"
          required
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          type="password"
          required
        ></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="loginFormReset">重置</el-button>
        <el-button type="success" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 重置表单
    loginFormReset() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      console.log('success');
      this.$router.push('main')
    },
  },
};
</script>

<style scoped>
.login_container {
  width: 40%;
  height: 50%;
  background-color: aquamarine;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
}
.login_avatar {
  width: 128px;
  height: 128px;
  border: 1px solid aquamarine;
  border-radius: 50%;
  padding: 10px;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.login_form {
  width: 60%;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.button {
  float: right;
}
</style>