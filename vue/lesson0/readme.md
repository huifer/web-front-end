# vue
## 安装
- `npm install vue --save`
- 命令行工具`npm install --global vue-cli`
- 通过vue-cli 进行项目创建
  - `vue init webpack my-project`一路回车后等待包的下载完成即可.
## 坑
- 使用`vetur`和`prettier`两个插件去对*.vue文件格式化代码后
- 下列为原始代码
```js
export default {
  name: 'fff',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
```
- 格式化后
```js
export default {
  name: 'fff',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
```
- 两款格式化插件将data() 都当作函数使用了...OMG 😢😢😢
**解决方案: 换成函数形式表达,不采用匿名函数!**
```js
 data: function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
```