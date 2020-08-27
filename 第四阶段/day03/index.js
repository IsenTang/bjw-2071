const _ = require('lodash');
// let person = {
//     name:'isen',
//     sayName: function(name){
//         console.log('hello,I am '+ name );
//     }
// }

// person.sayName(person.name)

// var person = {
//     name:'isen',
//     age:28,
//     sayName: function(self){
//         console.log('hello,I am '+ self.name + ' I am ' + self.age + ' old' );
//     }
// }

// person.sayName(person)

var person = {
    name:'isen',
    sayName: function(){
        console.log('hello,I am '+ this.name  );
    }
}

let person2 = {

    name:'lily'
}



// person.sayName.call(person2)


let person3 = {
    name: 'tom'
}

function fakeSayName(v){

    console.log(this.name + v);
}

global.name = 'global'

// fakeSayName.call(person3,1)

// fakeSayName.call(null,1)

// fakeSayName.apply(person3,[1]);

// fakeSayName.bind(person3)(1)

// function test(v){
//     console.log(person3.name + v);
// }


//使用 apply 来得到一个数组的最大值。

// let array = [1,3,6,10,29,11];

// // Math.max(1,2,3,4,5,6,7)

// console.log(Math.max.apply(null,array))

// function FakeMath(){

//     this.sum = function (v1,v2,v3){

//         return v1+v2+v3
//     }
// }

// const fakeMath = new FakeMath();

// console.log(fakeMath.sum.apply(null,array))
// console.log(fakeMath.sum.call(null,1,3,6))


// var a = 1; 
// var b = 2; 
// var test = function (first, second) { 
//     return first === a && second === b;
// }; 



// console.log(fakeCall(test, a, b))

// function fakeCall(fn){

//     // return fn(a,b);

//     // return fn.apply(null,[a,b])
//     let array = [];

//     for(let i = 1;i<arguments.length;i++){

//         array.push(arguments[i])
//     }

//     return fn.apply(null,array);
// }



// function fakeCall(fn){

//     let array = [];
//     for(let i = 1;i<arguments.length;i++){

//         array.push(arguments[i])
//     }

//     console.log(array);

//     return fn.apply(null,array)

//     // return fn.apply(null,[a,b])
// }
// function main(){

//     for(let i= 0;i<arguments.length;i++){

//         console.log(arguments[i]);
//     }
// }

// main(1,2,3,4)


// let obj1 = {
//     name:'isen',
//     age:28
// }

// let obj2 = obj1;

// obj2.age = 18;
// console.log(obj1);
// console.log(obj2);

// 浅拷贝
// let obj1 = {
//     name:'isen',
//     age:28
// }

// let obj2 = Object.assign({},obj1);

// obj2.age = 18;
// console.log(obj1);
// console.log(obj2);

// let obj1 = {
//     name:'isen',
//     age:28,
//     obj:{
//         a:1
//     }
// }

// let obj2 = Object.assign({a:1},obj1);

// obj2.age = 18;
// console.log(obj1);
// console.log(obj2);
// obj2.obj.a = 3;
// console.log(obj1);
// console.log(obj2);


let obj1 = {
    name:'isen',
    age:28,
    obj:{
        a:1
    },
    func: function(){

        console.log(1);
    }
}

// let obj2 = JSON.parse(JSON.stringify(obj1))


// let test = function(){

//     console.log(1);
// }

// obj2.age = 18;
// obj2.obj.a = 3;
// console.log(obj1);
// console.log(obj2)

let obj2 = _.cloneDeep(obj1);

obj2.age = 18;
obj2.obj.a = 3;
console.log(obj1);
console.log(obj2)

obj2.func = function(){

    console.log(2);
}
obj1.func()
obj2.func()


