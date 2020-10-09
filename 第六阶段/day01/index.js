// let obj = {};

// Object.defineProperty(obj, 'a', {
//     configurable: true,
//     get: function() {
      
//         return 'get'
//     },
//     set: function(newVal) {
//       console.log('set newVal is:', newVal)
//     }
// })

// obj.a = 'hello' // => set newVal is:hello
// console.log(obj.a) // => 0

// this.x = 1990
// let obj1 = {
//   x: 22,
//   say: function () { console.log(this.x) },
//   say2: () => { console.log(this.x) }
// }

// obj1.say();
// obj1.say2();
// obj1.say3();

const obj = {
  a:{
    a:1,
    b:{
      a:1,
      b:1
    }
  }
}

// 是否相同呢？
// const obj1 = { ...obj }
// console.log(obj);
// console.log(obj1);
// console.log(obj1 === obj);
// console.log(obj1.b === obj.b);

// const obj1 = { ...obj, b:{ test: 1} };

// console.log(obj1.b === obj.b);

function Test(x,y){
  this.x = x;
  this.y = y;
}

Test.prototype.toString = function(){
  return `${this.x} , ${this.y}`
}

// console.log(Test(1,2))

class Test{

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  toString(){
    return `${this.x} + ${this.y}`
  }
}

// const t  = new Test(1,2);

// console.log(t.toString())