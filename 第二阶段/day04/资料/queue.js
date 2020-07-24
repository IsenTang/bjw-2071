'use strict';

function Queue() {
    this.data = [];
    this.push = push; //添一个或多个元素到栈顶
    this.shift = shift; //移除队头的元素，同时返回被移除的元素
    this.front = front; //返回top元素
    this.isEmpty = isEmpty; //判断栈是否为空，空返回true，否则返回false
    this.clear = clear; //移除栈里的所有元素
    this.size = size;

    function push(ele) {
        this.data.push(ele);
    }

    function shift() {
        return this.data.shift(); //利用数组的shift()方法来达到移除队头的元素，同时返回被移除的元素
    }

    function front() {
        return this.data[0];
    }

    function isEmpty() {
        return this.data.length === 0;
    }

    function size() {
        return this.data.length;
    }

    function clear() {
        this.data = [];
    }
}


module.exports = Queue;