







* axios

Axios 是一个promise 封装的http库













* 一个最基本的axios请求

```
axios({
   url: 'http://49.235.98.65:3000/shop/shopList',
   method: 'get',
}).then(res=>{
   console.log('res', res)
}).catch(err=>{
   console.log('err', err)
})

也可以在外面指定请求方式，以上写法可以变换成
axios.get('http://49.235.98.65:3000/shop/shopList').then(res => {
   console.log('res', res);
}).catch(error => {
   console.log('error', error);
});


* post
axios.post('http://49.235.98.65:3000/user/regist', {
   username: 'mm2',
   password: 'bmbmbm',
   school: '大学',
   nickname: '昵称昵称',
   age: 11,
   gender: 0
})
.then(function (response) {
   console.log('res ee', response);
})
.catch(function (error) {
   console.log('error ee', error.response);
});
```









* 请求配置

```
常用的几个
{
   // `url` 请求的服务器接口地址
  url: '/user',

  // `method` 请求方式 get post put delete 
  method: 'get', // default

  // `headers` 发送给服务器的自定义请求头
  headers: {'user': 'userId'},

  // `params` get请求参数
  params: {
    id: 12345
  },
  
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 500000,
  
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // post 请求参数
  data: {
    firstName: 'Fred'
  }
```







* axios的返回体

```
config: {}    // 请求配置信息
data: []      // data 服务器响应数据，axios会把服务器返回数据包在data里
headers: {}   // 服务器响应头
request: {}   // 响应请求
status: 200   // 服务器响应的HTTP状态码
statusText: "" // 服务器响应的HTTP状态信息
                  ======》status和statusText属性对照表	https://blog.csdn.net/qibao16/article/details/78526631
```











* 我们会发现axios 有很多同样的配置，这时候我们可以把axios放在一个文件中统一处理

```
* 创建一个utils/fetch.js
在fetch.js中
import axios from "axios"
import Config from "./config"

const instance = axios.create({
  baseURL: Config.baseUrl,
  timeout: 300000,
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
  console.log("config", config);
  // 在发送请求之前做些什么
  config.headers.userToken = 'user-token-123456'
  return config;
}, function (error) {
  // 快速获得一个拒绝状态的promise队对象
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 快速获得一个拒绝状态的promise队对象
    return Promise.reject(error);
  });

export default instance



页面调用时
1. 引入 import fetch from "../utils/fetch"
2. 调用
fetch('shop/shopList').then(res=>{
   console.log('res ==', res);
}).catch(err=>{
   console.log('err ===', err);
})
```







* 对于get，post 等请求的二次封装

```
* get
export const get = async (url, data) => {
  const response = await instance.get(url, data).then(res => {
    return responseHandler(response)
  }).catch(error => {
      // console.log('xxx get error===>', error);
      errorHandler(error)
    }
  )
}


另一种写法
export const get = async (url, data) => {
    const response = await api.get(url, data).catch(
        (error) => {
            errorHandler(error);
        }
    );
    return responseHandler(response);
}
```







* 处理正确返回

```
// 处理正确返回
const responseHandler = (response) => {
  // 如果状态码成功
  if (response && response.status == 200) {
    // 如果response里没有data，返回空
    if (!response.data) {
      return {}
    }
    // 否则返回response.data
    return response.data
  }
  return null
}
```





* 在main.js里把请求挂载到全局

```
import  { post, get } from './utils/fetch';
Vue.prototype.yGet = get;
Vue.prototype.yPost = post;


页面里调用：
async axiosGet() {
      const data = await this.yGet("/user/userinfo", {
        params: {
          id: 1111111111,
        },
      })
}
```











* 请求方式

| 请求方式 | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| Post     | 大多用于提交表单或者上传文件，数据被包含在请求本文中         |
| Get      | 请求页面，并返回页面内容                                     |
| Head     | 类似get请求，但响应体没有内容，用于获取包头，可以不必传输全部内容，就获取 关于该资源的信息 |
| Put      | 更新：从客户端向服务器传送的数据取代指定文档中的内容         |
| Delete   | 请求服务器删除Request-URI所标识的资源。                      |
| Connect  | 把服务器当作跳板，让服务器代替客户端访问其他网页，通常用于SSL加密服务器的链接 |
| Options  | 这个方法服务器会传回该资源所支持的所有HTTP请求方法，可以测试服务器功能是否正常运作。 |
| Trace    | 回显服务器收到的请求，主要用于测试或者诊断                   |















```
https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img3.jpg
Apple/苹果 12.9 英寸 iPad Pro双摄学习吃鸡平板电脑mini5air3

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img4.jpg
2020款Apple27英寸iMac台式一体机/第十代I5处理器 256GB固态硬盘

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img5.jpg
任天堂多模式便携式游戏机掌机Switch单机标配续航升级版

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img6.jpg
Tesla/特斯拉收藏摆件车模玩具车仿真Model X 1:18

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img7.jpg
阳光寒假作业，阳光课堂同步训练作业本单元测试卷辅导资料书

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img9.jpg
头部按摩器八爪鱼头皮按摩器抓头挠头神器灵魂抽取提取摄取出窍器

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img10.jpg
正品B.Duck小黄鸭存钱罐大号38cm储蓄罐可爱摆件创意礼品生日礼物

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img1.png
日本三菱圆珠笔SS-1025/1015天然百年橡木笔杆黑色原子笔0.7mm镀铬自动铅笔五合一多功能笔

https://by-image.oss-cn-shanghai.aliyuncs.com/studentProject/img2.png
景德镇陶瓷笔筒中国风办公室桌面书房复古仿古摆件工艺品礼品学生


"id": "string",
  "name": "string",
  "price": "string",
  "image": "string"

```

