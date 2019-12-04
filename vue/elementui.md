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
- 引用完成就可以快乐的玩耍了.
## 使用
- 使用核心: copy 官网找到组件库选择需要的使用即可.
```js
<template>
  <div>
    <h1>element ui</h1>
    <ol>
      <ul><label>图标 icon 通过class来替换不同的图标</label><i class="el-icon-edit"></i></ul>
      <ul>
        <el-button @click="btn"
                   type="success">
          btn
        </el-button>
      </ul>
      <ul>
        <el-link type="success" href="/">首页链接</el-link>
      </ul>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ElementUIDemo',
    data() {

    },
    methods: {
      btn() {
        alert('btn');
      }
    }
  };
</script>

<style scoped>

</style>

```
