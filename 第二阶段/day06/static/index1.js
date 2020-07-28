var objDemo = document.getElementsByClassName("demo")[0];
var objSmallBox = document.getElementsByClassName("small-box")[0];
var objMark = document.getElementsByClassName("mark")[0];
var objFloatBox = document.getElementsByClassName("float-box")[0];
var objBigBox = document.getElementsByClassName("big-box")[0];
var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

//鼠标移入事件
objMark.onmouseover = function () {
    objFloatBox.style.display = "block"
    objBigBox.style.display = "block"
}
//鼠标移出事件
objMark.onmouseout = function () {
    objFloatBox.style.display = "none"
    objBigBox.style.display = "none"
}

//鼠标移动事件
objMark.onmousemove = function (ev) {
    var _event = ev || window.event;  //兼容多个浏览器的event参数模式

    
    // 获取放大镜的位置，left&top
    /* 
     * client(X,Y) : 事件被触发时鼠标指针相对于浏览器页面的坐标
     * offset(left,top,.....) : 自身外边框到定位父级的内边框的距离
     * offset(Width,Height) : 实际的width + borderWidth
     */
    
    var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
    var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;
    
    if (left < 0) {
        left = 0; 
    } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
        left = objMark.offsetWidth - objFloatBox.offsetWidth;
    }

    if (top < 0) {
        top = 0;
    } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
        top = objMark.offsetHeight - objFloatBox.offsetHeight;
    }

    objFloatBox.style.left = left + "px"; 
    objFloatBox.style.top = top + "px";

    // /* 按百分比显示 */
    var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
    var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
    objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
    objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
}