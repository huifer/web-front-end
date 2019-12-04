<template>
  <div>
    <h2>todo界面</h2>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="输入任务"
      @keyup.enter="addTodo"
    />
    <TodoItem :todo="todo" v-for="todo in todos" :key="todo.id" @del="deleteTodo" />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
var id = 0;
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: []
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
    }
  }
};
</script>

<style>
</style>
