<template>
  <div class="login-container">
    <div class="login-main">
      <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="checkData">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 校验数据
    checkData() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    // 登录
    async login() {
      const data = await this.yPost("/user/login", this.loginForm);
      if (data) {
        const userid = data.user._id;
        localStorage.setItem("userid", userid);
        this.$router.push({
          name: "management"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.login-main{
  width: 400px;
  border: solid 1px #f3f3f3;
  margin: 100px auto;
  padding: 70px;
  box-shadow: 0 3px 10px #eee;
  .login-btn{
    width: 300px;
  }
}
</style>
