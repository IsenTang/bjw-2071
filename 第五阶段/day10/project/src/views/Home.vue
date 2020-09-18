<template>
  <div class="home">
    <button @click="open1">提示</button>
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

     <div class="block">
      <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          @change="changeValue">
        </el-date-picker>
      </div>

    <el-dialog title="公司简介" :visible.sync="dialogTableVisible">
      <div>
        <h1>半圆学社</h1>
        <h3>描述描述描述描述描述描述描述描述描述</h3>
      </div>
    </el-dialog>


  </div>
</template>

<script>
import Moment from "moment"
export default {
  name: "Home",
  data () {
    return {
      value1: new Date(),
      dialogTableVisible: false
    }
  },
  methods: {
    open1 () {
      this.$message({
        showClose: true,
        type: 'success',
        message: '这是一条消息提示'
      });
    },
    changeValue (value) {
      console.log('e', Moment(value).format('YYYY-MM-DD hh:mm:ss'));
    }
  }
};
</script>

<style scoped lang="scss">

</style>

<style lang="scss">
.el-dialog{
  border-radius: 20px!important;
}
</style>
