<template>
  <div>
    <h3>用户信息</h3>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="大学">
          <el-input v-model="form.school"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      form: {}
    }
  },
  created() {
    this.form = JSON.parse(JSON.stringify(this.$store.state.work.user))
  },
  methods: {
    save () {
      console.log('保存', this.form)
      this.$store.commit("work/setUserInfo", JSON.parse(JSON.stringify(this.form)) );
    }
  },
}
</script>

<style lang="scss">
  
</style>