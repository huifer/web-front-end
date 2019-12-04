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
