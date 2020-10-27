# 自定义error

这个要和i18n串起来。

首先获取response.data.details，再获取response.data.code，再获取message，放入返回的对象中，如下：

```js
this.details = _.get(err, 'response.data.details');

this.code = _.get(err, 'response.data.code');

this.message = _.get(err, 'response.data.message') || err.message;
```

如果err的message中存在timeout of字段，则将code重置为timeout

如果err的message中存在Network Error字段，将code重置为network

从i18n中获取 error.${this.code}的翻译，如果找到翻译，则将this.message重置为翻译后的内容

如果找不到翻译，则默认获取err中response.data.message的值，如果还没有则取err.message，如果还没有，则获取翻译中的error.unknown，最后返回。



