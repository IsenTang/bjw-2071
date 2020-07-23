# 题目答案

1. ```js
   var val = 'c';
   var str = 'Value is' + (val === 'c') ? 'a':'b';
   console.log(str);
   ```

   结果是什么，为什么？

2. 一个物体从1000米高的地方落下，每次弹起的高度是前一次高度的0.6倍，问多少次之后，高度小于1米。

   ```js
   var h = 1000;
   
   var count = 0;
   while(h > 1){
   
     h = h * 0.6
     count++;
   }
   
   console.log(count);
   ```

   

3. 物品a 2元，b 5元，c 15元，请问刚好花完100元有多少种情况？

   ```js
   var count = 0;
   
   for(var i = 0; i <= 20 ; i++){
   
     for(var j = 0; j <=50; j++){
   
       for(var k = 0 ; k<=6;k++){
   
         if(i*5 + j*2 + k* 15 === 100){
   
           console.log(i,j,k);
           count ++;
         }
       }
     }
   }
   
   console.log(count);
   ```

   

4. 求s=a+aa+aaa+aaaa+aaa aa ( 一共5个数字 )的值，其中a为一个数字，如 s = 1 + 11 + 111 + 1111 + 11111 （5个数字）

   ```js
   var sum = 0
   var n=0;
   for(var i=0; i<2;i++){
     n = n*10+a; 
     console.log(n)
     sum += n;
   }
   console.log(sum);
   ```

   

5. 孩子吃糖，第一天你给孩子买了一些糖，孩子每天吃糖的一半多一个，到了第10天的时候，发现只剩下一个糖了，问当初第一天买了多少糖？

   ```js
   var day = 9;
   var sum = 1;
   while(day >= 1){
     sum = sum*2 + 1;
     day--;
   }
   
   console.log(sum);
   ```

   

6. 最近抖音有对折纸挑战，在不考虑难度的情况下，一张普通的0.0001米厚度的纸，多少次对折后，可以达到最高峰珠穆拉玛峰的高度8848米？

   ```js
   var h = 0.0001;
   
   var count = 0;
   while(h < 8848){
   
     h *= 2;
     count ++;
   }
   
   console.log(count);
   ```

   

7. 

   - 输入一个数字，首先判断是否为质数

   - 如果不是质数，将其分解质因数 如：24 = 2 * 2 * 2 * 3，将分解出的质数打印出来。

     ```js
     // 是否是质数
     function isPrime(n){
         for(var i=2;i<n;i++){
             if(n % i == 0){
                 return false;
             }
         }
         return true;
     }
     
     // 分解质因数
     function PrimeFactorizer(n){
     		
         while(isPrime(n) && n > 1){
     		//从最小的质数开始除
             for(var i=2;i<=n;i++){
                 if(n % i == 0){
                   // 打印
                    console.log(i);
     							//除掉这个最小的质数因子
                     n /= i;
                   	break;
                 }
             }
         }
     
     }
     ```

     