const fs = require('fs');
const { resolve } = require('path');
const { reject } = require('lodash');
// function main(){
//     console.log('main');
//     a();
// }

// function a(){
//     console.log('a');
//     b();
// }

// function b(){
    
//     console.log('b')
// }

// main();

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 0);

// console.log("Welcome to loupe.");
// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 2000);
// setTimeout(function timeout() {
//     console.log("setTimeout1");
// }, 1000);
// setTimeout(function timeout() {
//     console.log("setTimeout2");
// }, 3000);


// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");
// console.log("Welcome to loupe.");



function getPromise(){

    return new Promise((resolve,reject)=>{

        fs.readFile('..',(error,content)=>{
            
            if(error){ reject(error) }

            else{
                resolve(content)
            }
        })
    })
}

// getPromise().then((data)=>{

//     console.log(data);
// }).catch((error)=>{

//     console.log(error);
// })

// async function main(){

//     try {
//         let content = await getPromise();
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// setTimeout(function () {
//     console.log(1);
// },0);

// new Promise(function(resolve,reject){
//     console.log(2)
//     resolve(3)
// }).then(function(val){
//     console.log(val);
// })

// new Promise(function(resolve,reject){
//     console.log(22)
//     resolve(33)
// }).then(function(val){
//     console.log(val);
// })

// function main(){
//     console.log('main');
//     a();
// }


// function a(){
//     console.log('a');
//     b();
// }

// function b(){
//     console.log('b');
    
//     setTimeout(function(){
        
//         console.log(' timeout ');
//     },0)
    
//     console.log(' b done !');
// }

// main()

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0)

// Promise.resolve().then(() => {
// 	console.log(3)
// }).then(() => {
// 	console.log(4)
// })

// console.log(5)

// async function async1(){
//     console.log('async1 start')
//     async2().then(()=>{
//         console.log('async1 end')
//     })
    
// }
// async function async2(){
//     console.log('async2')
// }

// console.log('script start')

// setTimeout(function(){
//     console.log('setTimeout') 
// },0)  

// async1();

// new Promise(function(resolve){
//     console.log('promise1')
//     resolve();
// }).then(function(){
//     console.log('promise2')
// })
// console.log('script end')


// async function main(){

//     console.log(1);
// }

// main().then(()=>{

//     console.log(2);
// })

const string = JSON.stringify({name:'isen'});
console.log(JSON.parse(string));