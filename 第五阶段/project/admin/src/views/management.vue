<template>
  <div class="manage-container">
    <div class="manage-slide"></div>
    <div class="manage-main">
      <h3>商品管理
        <span>
          <el-popconfirm title="确定退出登录吗？" @onConfirm="confirmQuit">
            <el-button slot="reference" type="primary" plain>退出</el-button>
          </el-popconfirm>
        </span>
      </h3>
      <div class="manage-warpper">
        <el-button type="primary" icon="el-icon-edit" class="add-btn" @click="handlerAdd">增加</el-button>
        <div class="table-box">
          <el-table :data="list" border style="width: 100%">
            <el-table-column prop="_id" label="ID" width="270" />
            <el-table-column prop="name" label="商品名称" width="420" />
            <el-table-column prop="image" label="商品图片" width="180">
              <template slot-scope="scope">
                <img :src="scope.row.image" class="pro-image" alt="" />
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)" class="edit-btn">编辑</el-button>
                <el-popconfirm title="确定删除吗？" @onConfirm="onConfirm(scope.row)">
                  <!-- <el-button slot="reference">删除</el-button> -->
                  <el-button  slot="reference" size="mini" type="danger" class="delete-btn">删除</el-button>
                </el-popconfirm>
                <!-- @click="handleDelete(scope.row)"  -->
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog :title="dialogStatus=='create'?'新增商品':'编辑商品'" :visible.sync="dialogFormVisible" @close="closeModel">
      <el-form :model="proObj" ref="modelForm" :rules="rules">
        <el-form-item label="商品名称" :label-width="'100px'" prop="name">
          <el-input v-model="proObj.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品图片链接" :label-width="'100px'" prop="image">
          <el-input v-model="proObj.image" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="兑换所需积分" :label-width="'100px'" prop="price">
          <el-input v-model.number="proObj.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" @click="checkData">确定</el-button>
        <!-- <el-button @click="toggleModel(false)">取 消</el-button>
        <el-button type="primary" @click="toggleModel(false)">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    return {
      list: [], // 商品列表
      dialogFormVisible: false, // 编辑/新增 的弹框
      // modelTitle: "新增", // 弹框标题
      proObj: {}, // 增加或编辑的  每一条商品数据
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        image: [
          { required: true, message: "请输入商品图片地址", trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入兑换积分", trigger: "blur" },
          { type: "number", message: "积分必须为数字值" }
        ]
      },
      dialogStatus: "create" // 编辑：update
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取商品数据
    async getList() {
      const data = await this.yGet("/admin/shopList");
      if (data) {
        console.log("data", data);
        this.list = data;
      }
    },
    // 控制弹框显示隐藏
    toggleModel(bool) {
      this.dialogFormVisible = bool;
    },
    // 对新增/编辑 商品数据格式校验
    checkData() {
      this.$refs.modelForm.validate(valid => {
        if (valid) {
          if (this.dialogStatus === "create") {
            this.create();
          } else {
            this.update();
          }
        } else {
          return false;
        }
      });
    },
    // 检测关闭弹框
    closeModel() {
      console.log("关闭了弹窗");
      this.proObj = {};
      this.$refs.modelForm.clearValidate();
    },
    // 点击新增，显示弹框，并且修改弹框标题
    handlerAdd() {
      // this.proObj = {};
      this.dialogStatus = "create";
      this.toggleModel(true);
    },
    async update() {
      console.log("编辑商品 属性", this.proObj);
      let params = {
        data: {
          _id: this.proObj._id,
          name: this.proObj.name,
          price: this.proObj.price,
          image: this.proObj.image
        }
      };
      const res = this.yPut("/admin/shopItem", params);
      if (res) {
        console.log("修改成功", res);
        this.toggleModel(false); // 关闭弹框
        this.getList(); // 重新请求商品列表
        this.$message({
          message: "编辑成功",
          type: "success"
        });
      }
    },
    // 创建商品
    async create() {
      const data = this.yPost("/admin/shopItem", this.proObj);
      if (data) {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.toggleModel(false); // 关闭弹框
        this.getList(); // 重新请求商品列表
      }
    },
    // 点击编辑，显示弹框，并且修改弹框标题
    handleEdit(item) {
      console.log("item", item);
      this.dialogStatus = "update"; // 修改当前页面状态（新增或编辑）
      this.toggleModel(true); // 关闭弹窗
      this.proObj = JSON.parse(JSON.stringify(item)); // 深拷贝当前编辑项，不影响原数据
      console.log("当前proObj", this.proObj);
    },
    onConfirm(item) {
      this.handleDelete(item);
    },
    // 点击删除，调用删除接口
    async handleDelete(item) {
      let params = {
        id: item._id
      };
      const data = await this.yDel("/admin/shopItem", params);
      if (data) {
        console.log("删除成功");
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.getList(); // 刷新数据列表
      }
    },
    // 退出登录
    confirmQuit() {
      localStorage.removeItem("userid");
      this.$router.replace({
        name: "login"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.manage-container{
  // position: relative;
  padding-left: 36px;
  .manage-slide{
    width: 36px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #505050;
  }
  .manage-main{
    h3{
      font-size: 20px;
      padding: 18px 30px;
      margin: 0;
      box-shadow: 0 2px 4px #eee;
      span{
        float: right;
      }
    }
    .manage-warpper{
      .add-btn{
        margin: 15px 0 15px 15px;
        width: 89px;
        line-height: 1;
      }
      .table-box{
        padding: 15px;
        .pro-image{
          width: 100px;
          height: 100px;
        }
        .edit-btn{
          width: 80px;
          height: 30px;
        }
        .delete-btn{
          width: 80px;
          height: 30px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
// .el-button{
//   padding: 0!important;
// }
</style>