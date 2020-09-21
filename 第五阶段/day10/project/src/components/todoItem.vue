<template>
  <div>
    <div class="todo-item">
      <el-checkbox v-model="item.isFinish" @change="updateState"></el-checkbox>
      <p>{{ item.title }}</p>
      <div style="width: 40px;height: 40px;">
        <div class="remove" @click="remove">×</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todoItem',
  props: {
    item: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true
    }
  },
  created() {
  },
  methods: {
    updateState() {
      this.item.isFinish = !this.item.isFinish;
      console.log('item', this.item);
    },
    remove() {
      this.$emit('emitRemove', {
        item: this.item
      });
    }
  },
}
</script>

<style lang="scss">
.todo-item {
  background-color: #ffffff;
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  &:hover {
    background-color: #fafafa;
    .remove{
      display: block;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
    max-width: 80%;
  }

  .remove{
    display: none;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    color: #999;
  }
}
</style>