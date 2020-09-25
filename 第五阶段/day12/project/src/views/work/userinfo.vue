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
import { mapState, mapActions } from "vuex"
export default {
  name: 'work',
  data () {
    return {
      form: {}
    }
  },
  computed: {
    ...mapState({
      "user": state=>state.work.user
    })
  },
  created() {
    console.log('store', this.$store);
    this.form = JSON.parse(JSON.stringify(this.user))
  },
  methods: {
    // ...mapActions([
    //   'work/setUser'
    // ]),
    ...mapActions({
      'setUser': 'work/setUser'
    }),
    save () {
      console.log('保存', this.form)
      this.setUser(JSON.parse(JSON.stringify(this.form)));
      // this.["work/setUser"](JSON.parse(JSON.stringify(this.form)));
    }
  },
}
</script>

<style lang="scss">
  
</style>