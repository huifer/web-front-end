# webpack 入门
## 工程目标
- 安装webpack
- 使用webpack打包一个js
## 安装
```
npm install --save-dev webpack
# 4.x版本需要使用
npm install --save-dev webpack-cli
```
## code
- 创建`/src/index.js`文件键入
```js
function component() {
  var element = document.createElement("div");
  element.innerHTML ="hello webpack!!!";
  return element;
}

document.body.appendChild(component());
```
- 编辑`package.json` 在`script`键入: 
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```
- 在启动之前还需要编写`webpack.config.js`
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出文件地址
    path: path.resolve(__dirname, 'dist')
  }
};
```

- `npm run build`
```
$ npm run build

> lesson0@1.0.0 build G:\redis-jq\web-front-end\webpack\lesson0
> webpack

Hash: 51055cf479295b0175d4
Version: webpack 4.41.2
Time: 89ms
Built at: 2019-12-02 11:09:29
    Asset   Size  Chunks             Chunk Names
bundle.js  1 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js 181 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
- 在 dist 目录创建一个html文件
```html
<!doctype html>
<html>
  <head>
    <title>webpack</title>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```
双击打开这个html文件即可看到效果了😉