# webpack 资源管理
## CSS
### 安装
- 管理 css 需要安装: `npm install --save-dev style-loader css-loader` 
### 编码
- 写一个css
```css
.hello {
  color: red;
}
````
- 在js中使用这个css
```js
import './style.css';


function component() {
  var element = document.createElement("div");
  element.innerHTML ="hello webpack!!!";
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());

```
### 编译
- 编辑`webpack.config.js`
```js
 module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
```
- `npm run build`
- 双击打开dist中的index.html文件查看效果
## IMG
### 安装
- 管理 img 需要安装:  `npm install --save-dev file-loader`
### 编码
- 找一个png下载到src目录下,编辑`background`属性
```css
.hello {
  color: red;
  background: url("./web.png");
}
```
- 修改js
```js
import "./style.css";
import Icon from "./web.png";

function component() {
  var element = document.createElement("div");
  element.innerHTML = "hello webpack!!!";
  element.classList.add("hello");

  // add img
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

```

### 编译
- 编辑`webpack.config.js`
```js
 {
    test: /\.(png|svg|jpg|gif)$/,
    use: ["file-loader"]
}
```
- `npm run build`


## 其他资源管理
- 通过不同的loader拓展进行各类资源的管理