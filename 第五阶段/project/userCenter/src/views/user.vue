<template>
  <div class="user-container">
    <div class="user-main">

      <div class="tab-main">
        <div class="tab-item" @click="changeTab(1)">
          <p>个人信息</p>
          <span v-if="index==1"></span>
        </div>
        <div class="tab-item" @click="changeTab(2)">
          <p>兑换记录</p>
          <span v-if="index==2"></span>
        </div>
      </div>

      <div class="user-warpper">
        <div v-if="index==1" class="user-tab1">
          <userInfo :uid="user.id"></userInfo>
        </div>
        <div v-if="index==2" class="user-tab2">
          <change-record :uid="user.id"></change-record>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import userInfo from '../components/userInfo'
import changeRecord from '../components/changeRecord'
import { mapState } from 'vuex'

export default {
  name: 'userIndex',
  components: { userInfo, changeRecord },
  data () {
    return {
      index: 1,
    }
  },
  computed: {
    ...mapState({
      "user": state=>state.login.user
    })
  },
  created() {
  },
  methods: {
    changeTab (ind) {
      this.index = ind;
    }
  },
}
</script>

<style scoped lang="scss">
.user-container {
  width: 100%;
  height: 100%;
  .user-main {
    width: 960px;
    margin: auto;
    padding: 80px 0 0;
    .tab-main{
      display: flex;
      flex-direction: row;
      align-items: center;
      .tab-item{
        position: relative;
        width: 140px;
        cursor: pointer;
        p{
          font-size: 22px;
          color: #333;
          font-weight: 500;
          line-height: 40px;
          text-align: center;
        }
        span{
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 4px;
          width: 90px;
          margin-left: -45px;
          background: #bd62e2;
        }
      }
    }
    .user-warpper{
      margin-top: 30px;
      width: 960px;
      height: 500px;
      border: solid 1px #f3f3f3;
      padding: 50px 90px;
      box-shadow: 0 2px 12px #c5c5c5;
      overflow-y: scroll;
    }
  }
}
</style>