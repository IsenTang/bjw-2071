<template>
  <div class="tab2-container">
    <div class="tab2-list">
      <div v-for="item in list" :key="JSON.stringify(item)" class="tab2-item">
        <h2>{{ item.name }}</h2>
        <h3>{{ item.exchangeDate | formatTime }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Moment from "moment"
import { mapState } from "vuex"
export default {
  name: 'userIndexComp',
  props: {
      uid: {
          type: [String, Number],
          require: true
      }
  },
  filters: {
    formatTime (value) {
      return Moment(value).format('YYYY-MM-DD hh:mm')
    }
  },
  data () {
    return {
      list: [],
    }
  },
  computed: {
    ...mapState({
      'user': state=>state.login.user
    })
  },
  mounted() {
    this.getChangeRecord();
  },
  methods: {
    async getChangeRecord () {
      const res = await this.yGet('shop/exchangedRecord', {
        params: {
          id: this.user._id
        }
      })
      if(res){
        this.list = res;
      }
    },
    returnRandom() {
      return Math.random()
    }
  },
}
</script>

<style lang="scss">
.tab2-container {
  .tab2-list{
    .tab2-item{
      border-bottom: solid 1px #f3f3f3;
      padding: 30px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h2{
        font-size: 16px;
        color: #555;
        font-weight: 500;
        max-width: 500px;
      }
      h3{
        font-size: 14px;
        color: #999;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
}
</style>