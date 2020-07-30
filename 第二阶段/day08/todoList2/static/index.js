
var taskItems = document.getElementsByClassName("task-item");

var inputEle = document.getElementsByClassName('task-input')[0];

var taskListEle = document.getElementsByClassName("task-list")[0];

var addBtn = document.getElementsByClassName('add-btn')[0];

var close = document.getElementsByClassName("close");

/* 初始化 */
init();

/* 绑定 */
bindCloseEvent();

addBtn.onclick = addTask;

/* enter事件 */
inputEle.onkeydown = function (e){

    if(e.keyCode === 13){

        addTask();
    };
}

/* 初始化 */
function init(){

    for (var i = 0; i < taskItems.length; i++) {
        var span = createCloseSymbol()
        taskItems[i].appendChild(span);
    }

    bindCheckedEvent()
}

/* 给li绑定点击checked事件 */
function bindCheckedEvent(){
   
    for (var i = 0; i < taskItems.length; i++) {
        taskItems[i].onclick = function(){

            this.classList.toggle('checked');
        }
    }
}

/* 添加任务 */
function addTask() {

    var li = document.createElement("li");

    li.className = 'task-item';
    /* 添加文本 */
    var inputValue = inputEle.value;

    /* 如果没有输出，则直接返回，不做任何操作 */
    if(inputValue === ''){
        return ;
    }

    var text = document.createTextNode(inputValue);

    li.appendChild(text);

    taskListEle.appendChild(li);
    
    // /* 重置input的值 */
    inputEle.value = "";

    var span = createCloseSymbol();
    li.appendChild(span);

    li.onclick = function(){

        this.classList.toggle('checked');
    }

    bindCloseEvent();
}

function createCloseSymbol(){

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    return span;
}


function bindCloseEvent(){

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var parentEle = this.parentElement;
            parentEle.remove();
        }
    }
}