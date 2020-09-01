# Storage



`localStorage`和`sessionStorage`一样都是用来存储客户端临时信息的对象。

他们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。



### 使用：

```js
localStorage.setItem('key','value');

sessionStorage.setItem('key','value');

localStorage.getItem('key');

sessionStorage.getItem('key');

localStorage.removeItem("key");

localStorage.clear(); 
```



### 注意：

这是存储在浏览器端的，所以不同浏览器是无法共享其中的信息的



### 区别：

localStorage 不会过期，除非手动清除

sessionStorage 每次分页后者浏览器关掉后就会清除

# Localstorage,sessionstorage,cookie区别



cookie在同源的http请求中携带，在浏览器和服务器中间来回传递。不超过4k。



localstorage和sessionstorage在本地存储。5m大小限制。



localstorage始终有效，即使浏览器关闭，在所有同源浏览器中都可以使用



sessionstorage在窗口关闭之前有效，不能在不同窗口共享，即使是同源。