# switch

条件分支语句

- switch case 进行全等比较

```javascript
var date = new Date().getDay();

if(date == 0 ){
  console.log('星期天');
}

switch (new Date().getDay()) {
    case 0:
        day = "星期天";
        break;
    case 1:
        day = "星期一";
         break;
    case 2:
        day = "星期二";
         break;
    case 3:
        day = "星期三";
         break;
    case 4:
        day = "星期四";
         break;
    case 5:
        day = "星期五";
         break;
    case 6:
        day = "星期六";
}

function main(num){

    switch(num){

        case 1:
            console.log(111);
        		break;
        case 2:
            console.log(222);
        		break;
        case 3:
            console.log(333);
        		break;
      default:
        		console.log('默认');
        		break;
    }
}

main(3);

// break退出语句。
// defalut:
// 我们在使用时，会



```

