# koa框架

### 首先，啥叫框架？

Framework，解决一个开放性问题而设计的，具有一定**约束性**的支撑结构，在此结构上可以根据具体问题扩展、安插更多的组成部分，从而更迅速和方便地构建完整的解决问题的方案。

与之相对的，还有一个东西，叫做库（Library）。库是将一系列代码集合成一个产品，供程序员使用。

库与框架的区别：

品牌机和组装机配件的区别。

框架是库的升级版本。





在之前的学习中，我们学习了Node.js的基本语法。我们使用Node.js初始化一个**后端**框架叫做koa。

1. 首先使用npm，安装一个框架构造器：

   ```shell
   npm install -g koa2-generator
   ```

2. 然后使用这个框架构造器初始化一个框架，进入你想进入的文件夹，然后：

   ```shell
   koa2 firstServer
   ```

3. 在一阵初始化后，会新建一个文件夹，进入这个文件夹，执行：

   ```shell
   cd firstServer
   npm i
   ```

4. 这会安装上初始化框架的所有代码文件，你就可以了使用你自己的编辑器打开这个文件夹了，在终端输入：

   ```shell
   npm run start
   ```

   可以访问你的浏览器，localhost:3000，如果看到以下内容，就代表服务器启动成功了。

   

###  先看一下package.json：

是Node 项目的核心。 它记录了有关发布到NPM 之前所需要的项目的重要元数据，它还定义了npm 用于安装依赖项、运行脚本以及标识包的入口点的项目功能属性。



### 如果端口号冲突：

```shell
lsof -i tcp:3000
// list open files
// -i <条件>  输出符合条件与网络相关的文件
kill pid
```



### 首先介绍下eslint：

### lint是什么？

1. 提供代码规范
2. 提供自动检测代码的程序，提供结果告诉你哪一行代码不符合规范
3. 方便你去修改代码

eslint就是其中一种工具。

### 安装：

```shell
npm install eslint --save
```

然后安装相对应地插件。

安装vscode中的eslint插件，并进行配置，使得保存文件的时候，自动帮你format文件。

```json
 "editor.codeActionsOnSave": {
   "source.fixAll": true,
   "source.fixAll.eslint": true
 }
```



然后，我们来看一下框架。