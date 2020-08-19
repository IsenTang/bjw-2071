# mongodb



### 安装：

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/



### GUI:

nosqlbooster



### 基本概念：

| 名词       | 概念          |
| ---------- | ------------- |
| database   | 数据库        |
| collection | 数据库表/集合 |
| document   | 文档          |
| field      | 数据字段      |
| index      | 索引          |



### 使用:

```shell
show dbs // 显示所有数据库

use dbname // 转到某一个数据库

show collections // 显示数据库中的所有集合

db.createCollection('foods') // 创建集合

db.foods.drop() // 删除表
```



增删改查：(crud)( create , remove , update , find  )

插入数据：

```
//  插入单条数据
db.xx.insert({ name:'',role:'teacher'});

// 插入多条数据
db.xx.insertMany([{},{}]);
```



查找：

```
db.xxx.find({ 条件 })

db.banyuan.find({},{name:1}) // ==>仅仅返回哪个字段

// 操作符

$or: 或者
db.banyuan.find({$or:[{ name:'isen'},{name:'lucy'}]})

db.banyuan.find({age:{$gte:21}})

db.banyuan.find({age:{$gte:21,$lte:25}})

db.xxx.find({ 条件 }).limit(1)

db.xxx.find({ 条件 }).skip(1)

```



| **操作符** | **含义** |
| ---------- | -------- |
| $gt        | >        |
| $gte       | >=       |
| $lt        | <        |
| $lte       | <=       |
| $ne        | 不等于   |
| $eg        | 等于     |

更新数据：

```
db.xx.update({ 条件 },{ 更新 });

db.xx.update({ 条件 },{ $set:{ xxx:xxx }});

db.banyuan.update({ role:'student'},{$set:{class:'web'}},{multi:true}); // ====> multi 代表匹配多条数据

db.banyuan.updateMany({ role:'student'},{$set:{class:'test'}});
// 使用updateMany 同上
```

删除数据：

```
db.banyuan.remove({条件},{ justOne : true});

db.banyuan.remove({});
```





```
db.banyuan.insertMany([{
    name:'isen',
    role:'teacher',
    age:28
},{
    name:'tom',
    role:'student',
    age:20
},{
    name:'lucy',
    role:'student',
    age:25
},{
    name:'lily',
    role:'student',
    age:21
}])
```

任务：

1. 插入全班的数据，包括姓名，年龄，性别，课程内容（年龄请你自己猜）

   ```
   刘星男，汤典，戴鑫，周梦茹，孙梁，张松怡，陈敬斯，方铭，赵一帆，石雪婷，郭长海，芮香，袁冉，陈张杰，魏昕琳 tom isen
   ```

2. 找出所有的男生

   ```
   db.banyuans.find({sex:'man'})
   ```

   

3. 找出年龄在25到30之间的人

   ```
   db.banyuans.find({age:{$gte:25,$lte:30}})
   ```

   

4. 更新全班人员的角色为学生

   ```
   db.banyuans.updateMany({},{$set:{role:'student'}});
   ```

   

5. 找出isen老师，更新角色为老师

   ```
   db.banyuans.updateMany({name:'isen'},{$set:{role:'teacher'}});
   ```

   

6. 找到tom，并删除他

   ```
   db.banyuans.remove({name:'tom'});
   ```

   

7. 最后查询出全班的信息

   ```
   db.banyuans.find({})
   ```

   



### 使用mongoose连接mongodb：

1. 新建一个文件夹

2. npm init

3. npm i  mongoose -save

4. ```js
   const mongoose = require('mongoose');
   
   
   async function initConnection() {
       await mongoose.connect('mongodb://localhost/banyuan', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
       }, (error) => {
          if (error) {
             console.log(error);
          }
    
          console.log('mongodb connection success');
       });
   }
   
   initConnection();
   ```

5. 使用mongoose中的model

   ```js
   initConnection().then(async ()=>{
       // Define a schema
       const { Schema } = mongoose;
   
       const banyuanSchema = new Schema({
            name:String,
            role:String
       });
   
       let data = {
         name:'test'
      }
   
      const banyuanModel = mongoose.model('banyuans', banyuanSchema);
   
      let model = new banyuanModel(data);
   
      await model.save();
   
       
   
       const result = await banyuanModel.find({}).exec();
   
       await banyuanModel.remove({ name:'test'});
   
   
      await banyuanModel.updateOne({name:'isen'},{role:'test'});
   });
   ```

   