# vue 整合element-ui
## 文档
- [element-ui](https://element.eleme.cn/#/zh-CN)
## install
- 在`package.json`中写入
```js
  "dependencies": {
    "vue": "^2.5.2",
    "vue-router": "^3.0.1",
    "element-ui": "^2.13.0"
  }
```
- 运行 `npm run install`
## 引入
- 修改`main.js`
```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

```
