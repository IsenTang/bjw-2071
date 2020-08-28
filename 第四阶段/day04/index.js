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

function Foo(){
    var name = 'fooname';
    var age = 12;
    this.getName = function(){
        return name;
    };
    this.getAge = function(){
        return age;
    };
};
var foo = new Foo();
console.log(foo);
console.log(foo.name);
console.log(foo.getName());
foo.name;

let array = [];

// for(var i=0; i<6; i++){
//     (function(ii){

//         array[i] = function(){
//             console.log(ii) // 0、1、2、3、4、5
//         }
//     })(i)
// }

for(var i=0;i<10;i++){

    array[i] = setFunction(i)
}

array[2]();

function setFunction(){

    let ii = arguments[0];

    return function(){

        console.log(ii);
    }
}

