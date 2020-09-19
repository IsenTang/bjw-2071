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
        <input placeholder="输入任务，点回车即可添加任务" class="task-input" type="text" />
      </div>

      <div class="task-main">
        <ul class="task-nav">
          <li class="chosStyle">
            <span>未完成（10）</span>
          </li>
          <li class="notChosStyle">
            <span>已完成（10）</span>
          </li>
          <li class="notChosStyle">
            <span>全部（10）</span>
          </li>
        </ul>

        <div class="task-list">
          <div class="tasks">
            <!-- <span class="no-task-tip">还没有添加任何任务哦！！</span> -->
            <div class="todo-item">
              <el-checkbox></el-checkbox>
              <p>todo</p>
              <div class="remove">×</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      nav: [
        { title: "未完成任务", mark: "not" },
        { title: "已完成任务", mark: "finish" },
        { title: "全部任务", mark: "all" }
      ],
      list: [{ title: "完成作业", isFinish: false }], // 任务列表
      todo: "" // 输入的任务名
    };
  },
  methods: {}
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
            }

            p {
              font-size: 14px;
              font-weight: 500;
              max-width: 80%;
            }

            .remove{
              width: 40px;
              height: 40px;
              text-align: center;
              line-height: 40px;
              font-size: 20px;
              color: #999;
            }
          }
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