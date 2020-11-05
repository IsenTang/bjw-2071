# admin项目

react使用antd-design，vue使用element-ui

### 餐馆：

1. 前端分页，从数据库获取所有餐馆，在前端进行分页

   ```json
   {
   	'url':'/restaurant/location/-74.0059413,40.7127837',
     'method':'get',
     'response':[{
       "_id": "rest_Bk7hLiJFz",
       "color": "#E8C500",
       "timezone": "America/New_York",
       "zscore": 0,
       "featured": false,
       "fake": false,
       "suspended": false,
       "manual": false,
       "language": "zh-CN",
       "canDeliver": true,
       "canPickup": true,
       "acceptCredit": "required",
       "tags": [
         "noodle"
       ],
       "contacts": [
         {
           "type": "email",
           "content": "happyeats138@gmail.com",
           "report": true,
           "order": true
         },
         {
           "type": "phone",
           "content": "6318368688",
           "report": true,
           "order": true
         },
         {
           "type": "other",
           "content": "老板娘3472772230",
           "report": true,
           "order": true
         }
       ],
       "hours": [
         {
           "type": "delivery",
           "dayOfWeek": 1,
           "start": 660,
           "end": 1200
         },
         {
           "type": "delivery",
           "dayOfWeek": 3,
           "start": 660,
           "end": 1200
         },
         {
           "type": "delivery",
           "dayOfWeek": 4,
           "start": 660,
           "end": 1200
         },
         {
           "type": "delivery",
           "dayOfWeek": 5,
           "start": 660,
           "end": 1200
         },
         {
           "type": "delivery",
           "dayOfWeek": 6,
           "start": 660,
           "end": 1200
         },
         {
           "type": "delivery",
           "dayOfWeek": 0,
           "start": 660,
           "end": 1200
         }
       ],
       "tax": 0.08875,
       "delivery": {
         "zone": {
           "type": "FeatureCollection",
           "features": [
             {
               "type": "Feature",
               "geometry": {
                 "type": "Polygon",
                 "coordinates": [
                   [
                     [
                       -74.01154518127441,
                       40.729502766807485
                     ],
                     [
                       -74.01626586914062,
                       40.72599038649773
                     ],
                     [
                       -74.02107238769531,
                       40.7036759387806
                     ],
                     [
                       -74.01214599609375,
                       40.699641625343126
                     ],
                     [
                       -73.97686958312988,
                       40.71083299030839
                     ],
                     [
                       -73.97403717041016,
                       40.71896506973411
                     ],
                     [
                       -73.99661064147949,
                       40.72566515672145
                     ],
                     [
                       -74.0024471282959,
                       40.72872225387065
                     ],
                     [
                       -74.01154518127441,
                       40.729502766807485
                     ]
                   ]
                 ]
               },
               "properties": {
                 "minimum": 1500,
                 "fee": {
                   "flat": 300,
                   "factor": 0
                 },
                 "estimate": {
                   "min": 40,
                   "max": 60
                 }
               }
             }
           ]
         },
         "provider": null,
         "locationId": null,
         "cutoff": null
       },
       "credit": {
         "minimum": 0,
         "fee": {
           "flat": 0,
           "factor": 0
         }
       },
       "commission": {
         "subtotal": {
           "flat": 0,
           "factor": 0.12
         },
         "total": {
           "flat": 0,
           "factor": 0
         }
       },
       "preferences": {
         "driverCopy": true,
         "dailyReport": true,
         "autoConfirm": false
       },
       "location": {
         "type": "Point",
         "coordinates": [
           -73.99858979999999,
           40.7152459
         ]
       },
       "name": {
         "zh-CN": "上海小面",
         "en-US": "Taste of Shanghai",
         "zh-HK": "上海小麵"
       },
       "address": {
         "number": "42",
         "street": "Mott Street",
         "city": "New York",
         "state": "NY",
         "country": "US",
         "zipcode": "10013",
         "formatted": "42 Mott St, New York, NY 10013, USA",
         "location": {
           "type": "Point",
           "coordinates": [
             -73.99858979999999,
             40.7152459
           ]
         },
         "unit": ""
       },
       "region": {
         "_id": "reg_lmO4PlcVn"
       },
       "lastUpdate": "2018-03-09T06:16:11.065Z",
       "createdAt": "2018-03-09T06:16:11.065Z",
       "analytics": {
         "history": 0
       },
       "updatedAt": "2020-01-19T10:01:01.635Z",
       "transferedAt": "2020-01-13T04:59:59.999Z",
       "items": [],
       "isen": {
         "updated": true
       }
     },......]
   }
   ```

   

2. 渲染中文名，地址，tags

3. 点击操作，弹出modal，可以修改中英文名，增加删除tags，以及hours，如示例项目所示

   获取所有tag：

   ```json
   {
     'url':'/tags',
     'method':'get',
   	'response':["noodle", "dim_sum".....]
   }
   ```

   修改restaurant信息

   ```json
   {
     'url':'/restaurant',
     'method':'post',
     'data':{
       id:restaurant._id,
       data:{
         ..._.omit(afterUpdatedRestaurant,'_id')
       }
     }
   	'response':{..}
   }
   ```

4. 手动关闭开关同restaurant的手动关闭逻辑，close不为null时候，为没有手动关闭，反之为手动关闭。点击后更新同样更新restaurant

5. 更新后，如果成功，发送请求获取最新数据，页码不变，如果失败，则弹出错误message，使用ui库里的message组件即可。

6. 这里故意做了一个错误，点击更新某些restaurant会弹出update错误，具体来说，如果id不是rest_开头的，都会报错，可以测试错误信息。



### menu：

1. 进入先获取所有restaurant，获取其中所有的中文名，放入select中

2. select可以进行搜索，中文搜索，以及拼音搜索

3. 点击select后，发送请求获取menu

   参数:

   - Id: 餐馆id
   - page：页码
   - limit：页面数量
   - keyword：关键字

   ```json
   {
     'url':`/food?restaurantId=${id}&page=${page}&limit=${limit}&keyword=${keyword}`,
     'method':'get',
   	'response':{
       list:[{
         ...food
       }],
       count:100
     } 
   }
   ```

4. menu页面是后端分页，所以需要传递page与limit参数，点击页面后发送新的请求获取新数据。返回数据中，会返回一共多少条，以及当前limit与page下的food信息，是一个数组。

5. 点击菜品栏，可以发送搜索请求，获取搜索的结果，请求和上面一样，要求获取之后，渲染在页面上。

6. 状态为food的available属性，可以进行修改

   ```json
   {
     'url':`/food`,
     'method':'post',
     'data':{
       id: food._id,
       data:{
         ..._.omit(afterUpdatedFood,'_id')
       }
     }
   	'response':{...} 
   }
   ```

7. 修改完成后，获取最新数据，页码不变。



### order：

使用echart完成，业内专用的图表展示。

文档为：

react：https://github.com/hustcc/echarts-for-react

vue：https://github.com/ecomfe/vue-echarts

echart官网与配置：https://echarts.apache.org/zh/index.html

​								https://echarts.apache.org/zh/option.html#title

echart例子：https://echarts.apache.org/examples/zh/index.html

建议配合baidu，google搜索使用。

1. 发送时间间隔请求，获取相对应的数据，展示在页面上

   ```json
   {
     'url':`/order?start=${start}&end=${end}`,
     'method':'get',
   	'response':[
       {...order}
     ] 
   }
   ```

2. 第一个是订单量，如项目所示，根据选择的时间间隔来进行渲染

3. 第二个是订单人群，饼图，根据人名进行分类。

### auth：

如项目所示，登录时候输入相对应的username，然后跳转到admin页面

1. admin权限，拥有所有权限
2. employee，拥有查看的权限，但是所有操作不能使用
3. visitor，只能查看menu和restaurant，没有进入order的权限（看不到order的menu，以及url输入order路由，会跳转到restaurant页面）

登录后，url输入login路由，直接跳转到restaurant页面

```json
{
  'url':`/admin/login`,
  'method':'post',
  'data':{
    username:'',
    password:''
  }
	'response':{ role :'xxxx'}
}
```

请求发送后，会返回一个`{ role : 'xxx'}`根据此role来进行页面的渲染与跳转。