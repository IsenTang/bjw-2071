<template>
  <div class="pro-item-container">
    <img :src="item.image" class="pro-pic" alt />
    <div class="pro-info">
      <h2>{{ item.name }}</h2>
      <div class="pro-change">
        <div class="pro-integral">
          <img :src="icon" alt />
          <p>{{ item.price }}积分</p>
        </div>
        <button class="pro-btn" @click="exchange">兑换</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "proItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      pic:
        "https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/mall/pic_baozheng_jifen.png",
      icon:
        "https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/mall/icon_jifen_duihuan.png",
    };
  },
  created() {
  },
  methods: {
    exchange () {
      this.$emit('exchange', {
        item: this.item
      })
    }
  },
};
</script>

<style lang="scss">
.pro-item-container {
  width: 210px;
  box-shadow: 0px 3px 8px #cecece;
  border-radius: 6px;
  overflow: hidden;
  .pro-pic {
    width: 210px;
    height: 210px;
    border-radius: 4px;
    overflow: hidden;
  }
  .pro-info {
    width: 210px;
    padding: 10px;
    h2 {
      font-size: 16px;
      color: #333;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .pro-change {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 8px;
      .pro-integral {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin-right: 4px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: #6964d1;
          line-height: 20px;
        }
      }
      .pro-btn {
        width: 54px;
        height: 20px;
        font-size: 14px;
        color: #fff;
        background-color: #6964d1;
        font-weight: 600;
        border-radius: 4px;
      }
    }
  }
}
</style>