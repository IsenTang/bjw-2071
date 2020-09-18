<template>
  <div class="about">
    <el-row>
      <el-button type="primary" icon="el-icon-edit" @click="dialogTableVisible = true">添加</el-button>
    </el-row>

    <el-table
      border
      :data="tableData"
      class="wwww"
      style="width: 100%"
      max-height="250">
      <el-table-column
        prop="id"
        label="ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="type"
        label="课程类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="title"
        label="课程名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作"
        width="220">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index)" type="danger" size="mini" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="课程类型">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="课程简介">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'clubName',
  data () {
    return {
      dialogTableVisible: false,
      tableData: [
        {
          id: 1,
          type: '第二专业',
          title: 'web2',
          desc: '简介简介简介简介简介简介'
        },{
          id: 1,
          type: '第二专业',
          title: 'web2',
          desc: '简介简介简介简介简介简介'
        },{
          id: 1,
          type: '第二专业',
          title: 'web2',
          desc: '简介简介简介简介简介简介'
        }
      ],
      form: {
        id: '',
        type: '',
        title: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('form', this.form);
      this.tableData.push(this.form)
      this.dialogTableVisible = false;
    },
    deleteRow (index) {
      this.tableData.splice(index, 1);
    }
  },
}
</script>

<style lang="scss">
.about{
  padding: 20px;
}
.el-table__header{
  width: 100%!important;
}
.el-table__body{
  width: 100%!important;
}
</style>
