# node 
## hello world
按照惯例先来一个**hello world**压压惊. 
- 安装`express`框架
`npm install express --registry=https://registry.npm.taobao.org`

- 编辑`app.js`文件
```js
// es6 方式引入 express 模块
import express from 'express';

// 创建express实例
var app = express();
// 通过app.get()方法来实现第一个程序
app.get('/', function(req, res) {
  res.send('Hello world');
});
// 端口监听设置
app.listen(3000, function() {
  console.log('当前app监听端口:3000');
});

```
- 执行`node app.js`
报错了 😢
```
$ node app.js 
G:\redis-jq\web-front-end\node\lesson1\app.js:2
import express from 'express';
^^^^^^

SyntaxError: Cannot use import statement outside a module
```
- node 不支持es6这样子的写法? 修改换成`var express = require('express');`吧.
- curl 访问`localhost:3000/`
```
$ curl "localhost:3000/"
Hello world
```
## 注意
- 如果需要使用es6请参考 [lesson0](../lesson0/node-how-to-use-import-and-export.md) ✌️