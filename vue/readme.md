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
- 解决方法:修改`.eslintrc.js`
```js
 'space-before-function-paren':["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]
```
 - 解决完这个问题就可以启动了 `npm run dev` 

 ## vue-router
 本文通过`vue-cli`构建了一个项目,hello-world等都会基于这个构建出来的项目进行开发. 由于使用了`vue-cli`创建项目那么页面的展示需要通过`vue-router`来进行显示.那先来说说`vue-router`吧.
 ### 学习目标
 - 通过配置`/src/router/index.js`文件来访问网页
 ### code 
 1. 编写一个组件放在`src/components`文件夹下 `RouteDemo.vue`
 ```js
 <template>
  <div>这是一个页面</div>
</template>

<script>
export default {
  name: 'routeDemo',
  data() {
    return {
    };
  }
};
</script>

 ```
2. 编写`src/router/index.js`
```js
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
// 引入刚才写好的组件
import routeDemo from '@/components/RouteDemo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 给组件写一个ur可供访问
      path: '/route_demo',
      name: 'RouteDemo',
      component: routeDemo
    }
  ]
});

```
3. 启动`npm run dev` 启动后通过`localhost:8080/#/route_demo`访问,每次这样很不方便,那么我们修改`HelloWorld.vue`文件将这些url都放在一起统一入口.
```js
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/route_demo">route_demo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```
- 通过`<router-link to="/route_demo">route_demo</router-link>`来设置具体的访问地址. 
4. 为了方便返回`HelloWorld.vue`我们也用一个入口统一控制,编辑`App.vue`
```js
<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

5. 再次启动`npm run dev`
   - 首页

![1575337014770](asserts/1575337014770.png)

- 编写的route_demo

  ![1575337043235](asserts/1575337043235.png)