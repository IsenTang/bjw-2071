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


function Dog(name){

    this.name = name;
}

Dog.prototype.bark = function(){

    console.log(this.name)
}

const dog1 = new Dog('dog1')

console.log(dog1);
dog1.bark();
console.log(dog1.__proto__.__proto__);
console.log(dog1.toString());

Object.toString()



