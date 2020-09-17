<template>
  <div class="container">
    <div class="slide">
      <ul>
        <li @click="fun('interest')">趣味小课</li>
        <li @click="fun('lesson')">预备课程</li>
        <li @click="fun('code')">编程入门</li>
      </ul>
    </div>
    <div class="main">
      <div class="card-box">
          <template v-for="(item, index) in list">
            <div class="item-card" v-if="item.type==nowClick" @click="jumpDetail(item)" :key="index">
              <img :src="item.coverUrl" alt="">
              <h1>{{ item.title }}</h1>
              <h2>{{ item.summary }}</h2>
            </div> 
          </template>
        
        <!-- <div v-for="(item, index) in thisList" :key="'s'+index" class="item-card" @click="jumpDetail(item)">
          <img :src="item.coverUrl" alt="">
          <h1>{{ item.title }}</h1>
          <h2>{{ item.summary }}</h2>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../data/list"

export default {
  name: 'work',
  data () {
    return {
      list: Data.list,
      nowClick: 'interest', // code:编程入门,lesson:预备课程,interest:趣味小课
    }
  },
  methods: {
    fun (name) {
      this.nowClick = name
    },
    jumpDetail(item) {
      this.$router.push({
        name: 'detail',
        query: {
          data: JSON.stringify(item)
        }
      })
    }
  },
  computed: {
    thisList () {
      let arr = [];
      switch (this.nowClick) {
        case 'interest':
          arr = this.list.filter(item => {
            return item.type=='interest';
          });
          break;
        case 'code':
          arr = this.list.filter(item => {
            return item.type=='code';
          });
          break;
        case 'lesson':
          arr = this.list.filter(item => {
            return item.type=='lesson';
          });
          break;
      }
      console.log('arr', arr)
      return arr
    }
  },
  created() {
    console.log('//', this.thisList)
  },
}
</script>

<style lang="scss">
.container{
  width: 1200px;
  font-size: 0;
  min-height: 1000px;
}
  .slide{
    width: 280px;
    display: inline-block;
    vertical-align: top;
    ul{
      li{
        font-size: 20px;
        line-height: 80px;
      }
    }
  }
  .main{
    width: 920px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    .card-box{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item-card{
        width: 400px;
        margin-bottom: 40px;
        img{
          width: 100%;
          height: 200px;
        }
        h1{
          font-size: 18px;
          color: #000;
          letter-spacing: 1.08px;
        }
        h2{
          font-size: 14px;
          font-weight: 400;
          color: #505050;
          line-height: 20px;
        }
      }
    }
  }

</style>