// let a = 1;

// function main(){

//     console.log(a);
//     let b = 2;
    
//     function getB(){

//         console.log(b);
//         return b;
//     }

//     return getB;
// }

// let func = main();

// console.log(func())

// function fn1() {
// 	let name = 'isen';
// 	function fn2() {
// 		console.log(name);
// 	}
// 	return fn2;
// }
// fn1()();

// function fn1() {
// 	let name = 'isen';
// 	function fn2() {
// 		console.log(name);
// 	}
// 	fn2();
// }
// fn1();

// function fn1() {
// 	var name = 'isen';
// 	function fn2() {
// 		console.log(name);
// 	}
// 	fn3(fn2);
// }
// function fn3(fn) {
// 	fn();
// }
// fn1();

// function Foo(){
//     var name = 'fooname';
//     var age = 12;
//     this.getName = function(){
//         return name;
//     };
//     this.getAge = function(){
//         return age;
//     };
// };
// var foo = new Foo();
// console.log(foo);
// console.log(foo.name);
// console.log(foo.getName());
// foo.name;

// let array = [];


// for(var i=0;i<10;i++){

//     array[i] = setFunction(i)
// }

// array[2]();

// function setFunction(ii){

//     // let ii = arguments[0];

//     return function(){

//         console.log(ii);
//     }
// }

// function a(){

//     let a = 1;
    
//     let getA = function(){

//         return a;
//     }

//     return getA;
// }

// function b(){

//     let a = 1;
    
//     let getA = function(){

//         return a;
//     }

//     return getA;
// }

// let array = [];
// for(var i=0;i<10;i++){

//     array[i] = setFunction(i)
// }

// array[2]();

// function setFunction(){
	
//     let i = arguments[0];

//     return function(){

//         console.log(i);
//     }
// }

// function Person() {
//     let name = 'isen';

//     this.getName = function() {
//         console.log(name);
//     }
// }

// const p1 = new Person();

// p1.getName();

// function Dog(name){

//     this.name = name;
//     this.bark = bark;
// }

// let bark = function(){

//     console.log(this.name)
// }

// const dog1 = new Dog('dog1');
// const dog2 = new Dog('dog2');

// console.log(dog1);
// console.log(dog2);
// console.log(dog1.bark === dog2.bark)
// dog2.bark()


// function Dog(name){

//     this.name = name;
// }

// console.log(Dog.prototype);
// Dog.prototype.bark = function(){

//     console.log(this.name);
// }

// console.log(Dog.prototype);

// const dog1 = new Dog('dog1');
// const dog2 = new Dog('dog2');

// console.log(dog1);
// console.log(dog1.__proto__);
// console.log(dog1.__proto__ === Dog.prototype);

// console.log(Dog.prototype.constructor === Dog);
// console.log(dog1.__proto__.constructor === Dog);
// dog1.bark();

// function Dog(name){

//     this.name = name;
// }

// Dog.prototype.bark = function(){

//     console.log(this.name)
// }


// const dog1 = new Dog('dog1')

// console.log(Dog.prototype === dog1.__proto__);

// dog1.__proto__.bark1 = function(){

//     console.log(this.name + '汪汪!');
// }

// dog1.bark1()

// const dog2 = new Dog('dog2')
// dog2.bark1()
// console.log(dog1);
// dog1.bark();
// console.log(dog1.__proto__.__proto__);
// console.log(dog1.toString());

// function Parent(){
//     this.name = 'mike';
// }

// function Child(){
//     this.age = 12;
// }

// Child.prototype = new Parent();//Child继承Parent，通过原型，形成链条

// let child = new Child();

// function Brother(){   //brother构造
//     this.weight = 60;
// }

// Brother.prototype = new Child();

// const brother = new Brother();
// console.log(brother);

// function Animal(){
//     this.bark = function(){
//         console.log('叫');
//     }
//     this.obj = { a:1 };
// }
// function Dog(name){

//     this.name = name;
// }

// Dog.prototype = new Animal()

// const dog1 = new Dog('dog1')

// console.log(dog1)
// dog1.bark()
// const dog2 = new Dog('dog2')

// let obj = dog1.obj

// obj.a = 3

// console.log(dog1.obj);

// console.log(dog2.obj);

// const a = {
//     test:1
// }
// console.log(a);
// delete a.test
// console.log(a);


// function SuperClass (color) {
//     this.color=color
// }
// 定义子类
// function SubClass (color) {

// }

// // 将父类的实例作为子类的原型对象
// SubClass.prototype = new SuperClass(['red'])
// // 创建实例对象o1并传递参数
// var o1 = new SubClass(['blue','red'])
// // 创建实例对象o2并传递参数
// var o2 = new SubClass()
// // 打印o1和o2的color
// console.log(o1.color)
// console.log(o2.__proto__.color)

function Parent(age){
    this.name = ['mike','jack','smith'];
    this.age = age;
    
}

Parent.prototype.say = function(){
    console.log('hello');
}

function Child(age){

    Parent.call(this,age);
    // console.log(this)
}

Child.prototype = new Parent();
const child1 = new Child(28);
const child2 = new Child(18);
// child1.name.push('isen')
console.log(child1.name);
child1.say()
// console.log(child2);

// function Parent(age){
//     this.name = ['mike','jack','smith'];
//     this.age = age;
// }

// Parent.prototype.say = function(){

//     console.log('hello');
// }

// function Child(age){
//     Parent.call(this,age);
// }

// Child.prototype = new Parent();
