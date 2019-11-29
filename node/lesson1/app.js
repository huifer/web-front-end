// es6 方式引入 express 模块
// import express from 'express';

var express = require('express');

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
