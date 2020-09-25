<template>
  <div class="about">
    <button @click="deletepRO">删除商品</button>
    <button @click="updatePassword">修改密码</button>
  </div>
</template>

<script>
export default {
  name: 'deletePro',
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
    async updatePassword() {
      let params = {
        oldPassword: 'alalal',
        newPassword: 'abcabc'
      }
      const data = await this.yPut('/user/changePassword', params);
      console.log('data', data)
      if(data) {
        console.log('更改成功')
      }
    },
    async deletepRO () {
      let params = {
        id: '5f69e9a9a840eb51ee75c0bf'
      }
      const data = await this.yDel('/admin/shopItem', params)
      console.log('login data', data);
      if(data){
        console.log('删除成功')
      }
    }
  },
}
</script>