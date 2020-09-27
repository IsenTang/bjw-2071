<template>
  <div class="regist-container">
    <div class="regist-warpper">
      <div class="regist-left">
        <img v-img-path="'auth/pic_denglu_wode.png'" alt="">
      </div>
      <div class="regist-right">
        <h1>注册新用户</h1>
        <el-form :model="registForm" :rules="rules" ref="rigist" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="registForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="registForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="school">
            <el-input v-model="registForm.school" placeholder="请输入学校"></el-input>
          </el-form-item>
          <el-form-item prop="nickname">
            <el-input v-model="registForm.nickname" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input v-model.number="registForm.age"></el-input>
          </el-form-item>
          <el-form-item prop="gender">
            <el-select v-model="registForm.gender" style="width: 100%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select> 
          </el-form-item>
        </el-form>
        <div style="font-size: 14px;color: #999;">
          已有账号？去<span @click="jumpPage('login')" style="color: #6963d0;">登录</span>
        </div>
        <button @click="checkData">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regist',
  data () {
    let checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        let reg = /^[0-9A-Za-z]+$/
        if(reg.test(value)) {
          callback();
        } else {
          callback(new Error('用户名只能英文+数字组合!!'))
        }
      }
    };
    let checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'));
      } else {
        if (value > 120) {
          callback(new Error('年龄不超过120'));
        } else {
          callback();
        }
      }
    };
    return {
      registForm: {
        username: '', // 用户名
        password: '', // 密码
        school: '', // 学校
        nickname: '', // 昵称
        age: null, // 年龄
        gender: 1, // 0：女   1：男  默认男
      },
      options: [
        { value: 1, label: '男' },
        { value: 0, label: '女' }
      ],
      rules: {
        username: [
          { validator: checkUserName, trigger: 'blur' },
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {  min: 6, message: '密码最少6位！！！', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '请输入学校', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 验证数据
    checkData () {
      this.$refs.rigist.validate((valid) => {
        if (valid) {
          this.regist();
        } else {
          return false;
        }
      });
    },
    // 注册
    async regist () {
      const data = await this.yPost('user/regist', this.registForm)
      if (data) {
        this.showMsg('恭喜您注册成功，2秒后跳转到登录页面');
        setTimeout(()=>{
          this.jumpPage('login')
        }, 2000)
      }
    },
    // 跳转页面
    jumpPage(name) {
      this.$router.replace({
        name: name
      })
    },
    // 显示弹框
    showMsg (msg) {
      this.$message({
        message: msg,
        type: 'warning'
      });
    },
  },
}
</script>

<style scoped lang="scss">
.regist-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .regist-warpper{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 2px 3px 7px #d8d8d8;
    border-radius: 8px;
    padding: 20px 0;
    .regist-left{
      width: 500px;
      padding: 40px;
      img{
        width: 100%;
      }
    }
    .regist-right{
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1{
        font-size: 24px;
        color: #333;
        margin-bottom: 30px;
      }
      input {
        width: 300px;
        height: 40px;
        border: solid 1px #eee;
        margin: 10px 0;
        padding: 0 10px;
        border-radius: 4px;
        font-size: 14px;
        color: #333;
      }
      textarea {
        width: 300px;
        height: 80px;
        border: solid 1px #eee;
        padding: 10px;
        line-height: 24px;
        font-size: 14px;
        color: #333;
      }
      button{
        width: 300px;
        height: 40px;
        border-radius: 6px;
        background: #6963d0;
        font-size: 16px;
        color: #fff;
        font-weight: 600;
        margin: 20px 0 0;
      }
    }
  }
}
</style>

<style lang="scss">
  .regist-container{
    .el-form{
      width: 300px;
    }
  }
</style>