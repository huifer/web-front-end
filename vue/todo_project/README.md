# vue-todo
## 简介
该项目使用vue、element-ui进行开发实现一个简单的todo-list功能.请忽略丑陋的样式🙏🙏🙏
## 开发流程
### header & footer
- header 和footer的开发模式大同小异就放在一起讲解了.
- 在`src/components`创建`Heard.vue`和`Footer.vue`两个文件
- Heard
```js
<template>
  <header class="todo-header">
    <h1>todo project</h1>
  </header>
</template>

<script>
export default {};
</script>

<style>
.todo-header {
  text-align: center;
}
h1 {
  font-size: 40px;
}
</style>

```
- Footer
```js
<template>
  <div class="footer">
    <span>作者:{{author}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'huifer'
    };
  }
};
</script>

<style>
</style>

```
- 编辑完成这两个文件后需要在`app.vue`中引入
```js
<template>
  <div id="app">
    <Heard />
    <Footer />
  </div>
</template>
<script>
import Heard from './components/Heard.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Heard,
    Footer
  }
};
</script>
```

- 这个阶段的开发内容就完成了`npm run dev`启动

### todo开发
- 一个todo功能需要：输入框、完成的,未完成的查看这些内容.
- todo的数据结构
```js
{
  // 自增id
  id: 0,
  // 任务正文
  context: "",
  // 默认未完成
  completed: false
}
```
- 确认完成数据结构后进行基础开发阶段目标: **写一个input标签获取输入内容组装成Object放入数组中**
```vue
<template>
  <div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="输入任务"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
var id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        // 自增id
        id: id++,
        // 任务正文
        context: e.target.value.trim(),
        // 默认未完成
        completed: false
      });
    },
  }
};
</script>

<style>
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

```
- `@keyup.enter="addTodo"`按键绑定:绑定回车,按下回车后执行addTodo方法

- 完成输入任务和任务存储后需要做的事情就是显示这些数据,这里使用一个组件来进行数据显示`TodoItem.vue`,为了灵活性增加了一个删除按钮,可以对任务进行删除
```vue
<template>
  <div :class="['todo-item',todo.completed ? 'completed': '']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    />
    <label>{{todo.context}}</label>
    <el-button
      type="danger"
      @click="deleteTodo"
    >删除任务</el-button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      requried: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del', this.todo.id);
    }
  }
};
</script>

<style scoped>
.todo-item {
  font-size: 24px;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/*打勾后的样式 */
.todo-item.completed {
  color: brown;
  /* background: rgb(84, 187, 37); */
  text-decoration: line-through;
}
</style>

```
- 写完`TodoItem.vue`后放入`Todo.vue`
```vue
<template>
  <div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="输入任务"
      @keyup.enter="addTodo"
    />
    <TodoItem
      :todo="todo"
      v-for="todo in filteredTodos()"
      :key="todo.id"
      @del="deleteTodo"
    />

  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
var id = 0;
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        // 自增id
        id: id++,
        // 任务正文
        context: e.target.value.trim(),
        // 默认未完成
        completed: false
      });
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
    },

    /**
     * 过滤状态
     */
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed);
    }
  }
};
</script>

<style>
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

```

- 完成`TodoItem.vue`整合入`Todo.vue`后继续进行优化,通过点击按钮来显示具体的任务类别
- `TodoTable.vue`
```vue
<template>
  <div>
    <span>{{todoLength}}个任务未完成</span>
    <span>
      <el-button
        v-for="state in states"
        :key="state"
        :type="btnType(state)"
        @click.native="toggleFilter(state)"
      >{{state}}</el-button>
    </span>

  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return { states: ['all', 'active', 'completed'] };
  },
  methods: {
    toggleFilter(state) {
      this.$emit('togole', state);
    },
    btnType(state) {
      if (state === 'all') {
        return 'info';
      } else if (state === 'active') {
        return 'danger';
      } else {
        return 'success';
      }
    }
  },
  computed: {
    /**
     * 返回有多少任务未完成
     */
    todoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  }
};
</script>

<style>
</style>

```


```vue
<template>
  <div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="输入任务"
      @keyup.enter="addTodo"
    />
    <TodoItem
      :todo="todo"
      v-for="todo in filteredTodos()"
      :key="todo.id"
      @del="deleteTodo"
    />
    <TodoTab
      :filter="filter"
      :todos="todos"
      @togole="togoleFilter"
    ></TodoTab>

  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoTab from './TodoTab.vue';
var id = 0;
export default {
  components: {
    TodoItem,
    TodoTab
  },
  data() {
    return {
      todos: [],
      inputtext: '',
      filter: 'all'
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        // 自增id
        id: id++,
        // 任务正文
        context: e.target.value.trim(),
        // 默认未完成
        completed: false
      });
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1);
    },
    togoleFilter(state) {
      console.log('子模块传递参数=' + state);
      this.filter = state;
    },
    /**
     * 过滤状态
     */
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed);
    }
  }
};
</script>

<style>
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

```
- 最后将组件放入`APP.VUE`文件
```js
<template>
  <div id="app">
    <Heard />
    <Todo />
    <Footer />
  </div>
</template>

<script>
import Heard from './components/Heard.vue';
import Footer from './components/Footer.vue';
import Todo from './components/Todo.vue';
export default {
  name: 'App',
  components: {
    Heard,
    Footer,
    Todo
  }
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
