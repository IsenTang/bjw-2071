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

setTimeout(function () {
    console.log(1);
},0);

new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)
}).then(function(val){
    console.log(val);
})

new Promise(function(resolve,reject){
    console.log(22)
    resolve(33)
}).then(function(val){
    console.log(val);
})