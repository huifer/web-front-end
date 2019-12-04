<template>
  <div :class="['todo-item',todo.completed ? 'completed': '']">
    <input type="checkbox" class="toggle" v-model="todo.completed" />
    <label>{{todo.context}}</label>
    <button class="destory" @click="deleteTodo">删除任务</button>
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

<style>
</style>
