var myMixin = {
  data() {
    return {
      message: "我是mixin的数据"
    };
  },
  methods: {
    sayHello() {
      console.log("hello from mixin!");
    }
  }
};

export default myMixin;
