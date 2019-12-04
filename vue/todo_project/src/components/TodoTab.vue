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
