'use strict';

function Stack() {
    this.data = [];
    this.push = push; //添一个或多个元素到栈顶
    this.pop = pop; //移除栈顶的元素，同时返回被移除的元素
    this.peek = peek; //返回top元素
    this.isEmpty = isEmpty; //判断栈是否为空，空返回true，否则返回false
    this.clear = clear; //移除栈里的所有元素
    this.size = size;

    function push(ele) {
        this.data.push(ele);
    }

    function pop() {
        return this.data.pop(); //利用数组的pop()方法来达到移除栈顶的元素，同时返回被移除的元素
    }

    function peek() {
        return this.data[this.data.length - 1];
    }

    function isEmpty() {
        return this.data.length == 0;
    }

    function size() {
        return this.data.length;
    }

    function clear() {
        this.data = [];
    }
}


module.exports = Stack;