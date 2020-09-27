<template>
  <div class="tab1-container">
    <img :src="user.avatar" class="user-avatar" alt="">
    <div class="user-info">
      <div class="user-item-info">
        <span>姓名：</span>
        <span>{{ user.username }}</span>
      </div>
      <div class="user-item-info">
        <span>学校：</span>
        <span>{{ user.school }}</span>
      </div>
      <div class="user-item-info">
        <span>昵称：</span>
        <span>{{ user.nickname }}</span>
      </div>
      <div class="user-item-info">
        <span>性别：</span>
        <span>{{ user.sex==1?'男':'女' }}</span>
      </div>
      <div class="user-item-info">
        <span>密码：</span>
        <span>******</span>
        <span @click="toogleModel(true)" class="emitPassword">修改</span>
      </div>
    </div>

    <el-dialog title="修改密码" :visible.sync="isShowPassworkModel" @close="closeModel">
      <el-form :rules="rules" ref="dataForm" :model="form" label-width="120px">
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input type="password" v-model="form.oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="form.newPassword"></el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码">
          <el-input type="password" v-model="newPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">保存</el-button>
          <el-button @click="toogleModel(false)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'userIndexComp',
  data () {
    return {
      isShowPassworkModel: false, // 密码修改框显隐
      form: {
        oldPassword :'',
        newPassword: ''
      },
      newPassword: '',
      rules: {
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      "user": state=>state.login.user
    })
  },
  methods: {
    toogleModel (bool) {
      this.isShowPassworkModel = bool;
    },
    closeModel () {
      this.$nextTick(() => {
        this.form = {};
        this.newPassword = ''
        this.$refs.dataForm.clearValidate()
      })
    },
    onSave () {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          if(this.form.newPassword !== this.newPassword) {
            this.$message({
              message: '两次新密码不一致!',
              type: 'warning',
              offset: 120
            });
            return
          }
          this.changePassword();
        } else {
          return false;
        }
      });
    },
    async changePassword () {
      const res = await this.yPut('/user/changePassword', this.form)
      if(res&&res.success) {
        this.$message({
          message: '密码修改成功！',
          type: 'warning',
          offset: 120
        });
        this.toogleModel(false);
      }
    }
  },
}
</script>

<style lang="scss">
.tab1-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  .user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    width: 660px;
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    .user-item-info {
      width: 280px;
      padding: 14px 0;
      span {
        font-size: 16px;
        color: #666;
        font-weight: 400;
        line-height: 30px;
        margin-right: 20px;
      }
      .emitPassword{
        font-size: 14px;
        color: #3e2fc9;
        cursor: pointer;
      }
    }
  }
}
</style>