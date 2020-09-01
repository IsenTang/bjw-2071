var btn = document.getElementById("btn");
var div1 = document.getElementById("div1");
    
//事件冒泡
// btn.onclick = function(){
//     console.log("冒泡1.Click btn");
// }

// div1.onclick = function(){
//     console.log("冒泡1.5 Click div1");
// }

// document.body.onclick = function(){
//     console.log("冒泡2.Click Body");
// }

// document.onclick = function(){
//     console.log("冒泡3.Click document");
// }

// window.onclick = function(){
//     console.log("冒泡4.Click window");
// }

//事件捕获
window.addEventListener("click",function(){
    console.log("捕获4.Click window");
    // event.stopPropagation();
},true);

document.addEventListener("click",function(){
    console.log("捕获3.Click document");
},true);

document.body.addEventListener("click",function(){
    console.log("捕获2.Click body");
},true);

div1.addEventListener("click",function(){
    console.log("捕获1.5 Click div1");
},true);

btn.addEventListener("click",function(){
    console.log("捕获1.Click btn");
},true);