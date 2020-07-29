window.onload = function (){
    
    var index = 1;

    var container = document.getElementsByClassName("container")[0];
    var banner = document.getElementsByClassName("banner")[0];
    var img = document.getElementsByClassName("banner_img")[0];
    var li = document.getElementsByClassName("banner_li");
    var arrows = document.getElementsByClassName("arrow");

    var buttonContainer = document.getElementsByClassName("button_container")[0];

    var buttons = document.getElementsByClassName("button_container_circle")

    //offset
    var offset = img.offsetWidth ;

    container.style.width = offset + "px";
    container.style.height = img.offsetHeight + "px";
    container.style.overflow = "hidden";


    // 给banner 设置宽高
    banner.style.height = img.offsetHeight + "px";
    banner.style.width = offset * li.length + "px";
    banner.style.left = -offset + "px"; /*默认位移设置*/

    // 初始化arrow高度
    for(let i = 0; i < arrows.length; i++){
        arrows[i].style.top = parseInt(img.offsetHeight)/2 - parseInt(arrows[i].offsetHeight)/2 + 'px';
    }

    //初始化button位置
    buttonContainer.style.top = img.offsetHeight - 40 + "px";
    buttonContainer.style.left = (offset - buttonContainer.offsetWidth) / 2 + 'px'; 
}
