# 如何在node中使用es6
## 第一步
初始化node项目使用命令: `npm init`
package.json
```
{
  "name": "lesson0",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "author": "",
  "license": "ISC",

}

```
## 第二步
- 导入`express`库,命令: `npm install --save express`
- 编写`index.js` 
```
// es6 方式引入 express 模块
import express from 'express';

// var express = require('express');

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
## 第三步
- 导入 `npm install --save-dev babel-cli babel-preset-es2015 rimraf`

- 创建`.babelrc`文件,写入内容如下
```js
{
  "presets": ["es2015"]
}
```
## 第四步
修改`package.json`文件中`script`部分
```
"build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
"start": "npm run build && node dist/index.js"
```
## 第五步
启动咯...
`npm start`