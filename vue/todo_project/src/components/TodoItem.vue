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
      // 向上层传递id参数@del在标签上追加真正的方法在todo.vue
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
