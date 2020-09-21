<template>
  <div class="home">
    <div class="page-top">
      <div class="page-content">
        <h2>任务列表</h2>
      </div>
    </div>

    <div class="main">
      <div class="add-task">
        <h3 class="big-title">添加任务：</h3>
        <input v-model="todo" placeholder="输入任务，点回车即可添加任务" class="task-input" type="text" @keyup.enter="addTodo" />
      </div>

      <div class="task-main">
        <ul class="task-nav">
          <li v-for="(obj, ind) in nav" :key="'nav'+ind" :class="[chooseNav===ind?'chosStyle':'notChosStyle']" @click="changeNav(ind)">
            <span>{{ obj.title }}</span>
            <span v-if="ind==0">（{{ notFinishCount }}）</span>
            <span v-else-if="ind==1">（{{ finishCount }}）</span>
            <span v-else>（{{ list.length }}）</span>
          </li>
          <!-- <li class="chosStyle">
            <span>未完成（10）</span>
          </li>
          <li class="notChosStyle">
            <span>已完成（10）</span>
          </li>
          <li class="notChosStyle">
            <span>全部（10）</span>
          </li> -->
        </ul>

        <div class="task-list">
          <div class="tasks">
            <!-- <span class="no-task-tip">还没有添加任何任务哦！！</span> -->
            <template v-for="(item, index) in showList">
              <todo-item :key="'todo'+index" :item="item" :index="index" @emitRemove="fatherRemove"></todo-item>
            </template>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import todoItem from "../components/todoItem.vue"
export default {
  name: "Work",
  components: { todoItem },
  data() {
    return {
      nav: [
        { title: "未完成任务", mark: "not" },
        { title: "已完成任务", mark: "finish" },
        { title: "全部任务", mark: "all" }
      ],
      chooseNav: 0, // 选择的nav下标，默认是第一个0
      list: [
        { title: '11111111', isFinish: false },
        { title: '222222', isFinish: true },
        { title: '333333', isFinish: false },
        { title: '444444', isFinish: true },
        { title: '5555555', isFinish: false },
      ], // 任务列表
      todo: "" // 输入的任务名
    };
  },
  computed: {
    showList () {
      let arr = [];
      switch (this.chooseNav) {
        case 0:
          arr = this.list.filter(item => {
            return !item.isFinish
          })
          break;
        case 1:
          arr = this.list.filter(item => {
            return item.isFinish
          })
          break;
        case 2:
          arr = this.list;
      }
      return arr
    },
    notFinishCount () {
      const notList = this.list.filter(item => {
        return !item.isFinish
      })
      return notList.length
    },
    finishCount () {
      const List = this.list.filter(item => {
        return item.isFinish
      })
      return List.length
    }
  },
  methods: {
    addTodo() {
      if(!this.todo) return
      this.list.push({
        title: this.todo,
        isFinish: false
      })
      this.todo = "";
    },
    changeNav(ind) {
      this.chooseNav = ind;
    },
    fatherRemove (data) {
      let index = this.list.indexOf(data.item);
      console.log('delete item ', index)
      this.list.splice(index, 1);
    }
  }
};
</script>

<style scope lang="scss">
body {
  margin: 0;
  background-color: #fafafa;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.home {
  width: 80%;
  height: 620px;
  margin: 30px auto 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #c1c1c1;
  overflow: hidden;

  .page-top {
    width: 100%;
    height: 40px;
    background-color: #3f9cdb;

    .page-content {
      width: 50%;
      margin: 0 auto;

      h2 {
        margin: 0;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
      }
    }
  }

  .main {
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box;

    .add-task {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      padding: 40px 0;
    }

    .big-title {
      min-width: 100px;
      color: #222;
    }

    .task-input {
      width: 99%;
      height: 30px;
      outline: 0;
      padding: 0 10px;
      border: 1px solid #ccc;
    }

    .task-main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      .task-nav {
        padding: 0;
        margin: 0;
        list-style: none;

        li {
          width: 150px;
          margin: 0 0 30px 0;
          border-radius: 3px;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          cursor: pointer;

          span {
            font-size: 12px;
          }
        }

        // nav 被选中的样式
        .chosStyle {
          color: #ffffff;
          background-color: #3f9cdb;
        }

        // nav 未选中的样式
        .notChosStyle {
          color: #3f9cdb;
          background-color: #ffffff;
        }
      }

      .task-list {
        display: flex;
        flex: 1;
        flex-direction: column;
        background: #f3f3f3;
        padding: 10px;
        border-radius: 10px;
        margin-left: 20px;
        height: 400px;
        overflow-y: scroll;

        li {
          position: relative;
          font-size: 16px;
          border-bottom: 1px solid #ededed;

          &:hover {
            background-color: orange;
          }
        }

        .tasks {
          width: 100%;
          height: 400px;
          background-color: #fff;
          overflow-y: scroll;

        }
      }

      .no-task-tip {
        padding: 100px 0 10px 10px;
        display: block;
        // border-bottom: 1px solid #ededed;
        color: #777;
        text-align: center;
      }
    }
  }
}
</style>