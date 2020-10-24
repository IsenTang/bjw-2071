# git分支与合并

我们已经学习了git的pull，commit，push，今天我们来学习git的多人合作是怎么完成的。

首先建立一个新的仓库。

然后将本地库与之相连，可以使用clone或者使用git init的方式，都可。

### 合并

然后我们来进行如下操作：

1. 在本地库，我们之后称之为a文件夹，新建一个文件1.txt，输入一段内容

2. 将这个文件上传上去

3. 在一个新的地方，将这个库clone下来，我们之后称之为b文件夹

4. 同时修改a，b文件夹中的文件，其中b文件夹优先上传

5. a文件夹执行commit，push操作，看发生了什么

6. 优先pull下来，看文件发生了什么变化

7. 合并代码

   ```txt
   <<<<<<< HEAD
   aaaaaaaaa|aaaaaaa
   =======
   aaaaaaaaabbbbbbbbbb
   >>>>>>> c8e0294ded828fa94389d63fee3d8f4a1437b3e1
   ```

   



### 分支

1. 在github仓库中创建一个分支

2. 在本地切换这个分支

   ```shell
   git pull
   From https://github.com/IsenTang/banyuan-git-test
    * [new branch]      test       -> origin/test
   Already up to date.
   
   banyuan/git-test/a  main ✔                                                 0m
   ▶ git checkout test
   ```

   

3. 进行修改，然后上传

4. 查看github上的变化

5. 提起pull request，需求更改

6. 本地分支查询

   ```
   git branch -a
   ```

7. 切换分支

   ```
   git checkout xxxx　
   ```

![pull-request](http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/teach/pull-request.jpg)

8. 最后查询结果

