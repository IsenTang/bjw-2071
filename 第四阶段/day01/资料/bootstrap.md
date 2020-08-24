1. # bootstrap

   https://www.runoob.com/bootstrap/bootstrap-grid-system.html

   是一个响应式css框架。

   来自Twitter，用于开发响应式布局，移动设备优先的web项目。

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
   <meta charset="UTF-8">
   <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <title>bootstrap起步</title>
   </head>
   <body>
   <button type="button" class="btn btn-success">hello world</button>
   </body>
   </html>
   ```

   

   ### 栅格系统：(Grid)

   ![bootstrap栅格系统](/Users/touitsuchou/Documents/workspace/banyuan/课件/前端/img/bootstrap栅格系统.jpg)

   

   ```html
    <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
         <title>bootstrap起步</title>
     </head>
     <body>
         <div class="container">
             <div class="row" style="background: #DDD;padding: 20px 0;">
                 <div class="col-xs-12 col-sm-6 col-md-3" style="background: #EEE">模块1</div>
                 <div class="col-xs-12 col-sm-6 col-md-3" style="background: #CCC">模块2</div>
                 <div class="col-xs-12 col-sm-6 col-md-3" style="background: #EEE">模块3</div>
                 <div class="col-xs-12 col-sm-6 col-md-3" style="background: #CCC">模块4</div>
             </div>
         </div>
     </body>
     </html>
   
   ```

   

   1. .row 必须包含在.container或者.container-fluid中 

      ```html
      两者的区别 .container .container-fluid
      
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
        <link rel="stylesheet" 
              href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" 
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
              crossorigin="anonymous">
        <style>
      
          body{
            height: 200vh;
          }
          .main{
            background-color:red;
            width: 300px;
            height: 300px;
            position: fixed;
            left:0;
            top:200px
          }
      
          .back{
            background-color:aqua;
            width: 300px;
            height: 300px;
          }
      
        </style>
      </head>
      <body>
      
          <div class="container-fluid">
      
            <div class="back"></div>
          </div>
          
      </body>
      </html>
      ```

      

   2. 通过行（row）的形式在水平方向创建一组列（column）

   3. 栅格系统一共有12列，3个等宽的列可以使用3个.col-xs-4来创建

   4. 如果以行（row）中包含了超过12个列（column），则多余的列（column）所在的元素将被作为一个整体，另起一行

   

   

   ### 嵌套：

   ```html
   <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
         <title>bootstrap起步</title>
     </head>
     <body>
       <div class="container">
           <div class="row">
               <div class="col-md-3" style="background-color: #dedef8;box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                   <h4>第一列</h4>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   </p>
               </div>
               <div class="col-md-9" style="background-color: #dedef8;box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                   <h4>第二列 - 分为四个盒子</h4>
                   <div class="row">
                       <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                           <p>
                               Consectetur art party Tonx culpa semiotics. Pinterest 
               assumenda minim organic quis.
                           </p>
                       </div>
                       <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                           <p>
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           </p>
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                           <p>
                               quis nostrud exercitation ullamco laboris nisi ut 
               aliquip ex ea commodo consequat.
                           </p>
                       </div>
                       <div class="col-md-6" style="background-color: #B18904; box-shadow: inset 1px -1px 1px #444, inset -1px 1px 1px #444;">
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim.
                           </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
     </body>
     </html>
   ```

   