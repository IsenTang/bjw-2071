
//页面加载完毕后执行
window.onload = function () {
    var objDemo = document.getElementsByClassName("demo")[0];
    var objSmallBox = document.getElementsByClassName("small-box")[0];
    var objFloatBox = document.getElementsByClassName("float-box")[0];
    var smallImg = document.getElementsByClassName("small-img")[0];
    var objBigBox = document.getElementsByClassName("big-box")[0];
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

    //鼠标移入事件
    smallImg.onmouseover = function () {
        objFloatBox.style.display = "block"
        objBigBox.style.display = "block"
    }
    //鼠标移出事件
    smallImg.onmouseout = function () {

        objFloatBox.style.display = "none"
        objBigBox.style.display = "none"
    }
    //鼠标移动事件
    smallImg.onmousemove = function (ev) {
        var _event = ev || window.event;  //兼容多个浏览器的event参数模式

        /* 获取鼠标中心点，在小图片上的相对位置 */
        var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
        var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

        /* 在一半的放大镜之内，left设置为0 */
        if (left < 0) {

            left = 0;
        } else if (left > (objSmallBox.offsetWidth - objFloatBox.offsetWidth)) {

            /* 如果超过总宽度，则left定死为总宽度 - 放大镜的宽度 */
            left = objSmallBox.offsetWidth - objFloatBox.offsetWidth;
        }

        /* 同上 */
        if (top < 0) {
            top = 0;
        } else if (top > (objSmallBox.offsetHeight - objFloatBox.offsetHeight)) {
            top = objSmallBox.offsetHeight - objFloatBox.offsetHeight;
        }

        /* 放大镜的位置 */
        objFloatBox.style.left = left + "px"; 
        objFloatBox.style.top = top + "px";

        /* 计算位置所在的百分比 */
        var percentX = left / (objSmallBox.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objSmallBox.offsetHeight - objFloatBox.offsetHeight);

        /* 显示放大的图片相对应位置 */
        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
}
