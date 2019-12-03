<template>
  <div>
    {{msg}}
    <br />
    <span v-bind:title="title">鼠标悬停显示内容</span>
    <br />
    <p v-if="see">可见性v-if</p>
    <button v-on:click="changeSee">可见性按钮</button>
    <br />
    <h3>for循环</h3>
    <ol>
      <li v-for="todo in todos" :key="todo">{{todo.text}}</li>
      <!-- 下面这段代码出错,原因是eslint校验问题 -->
      <!-- <p v-bind="todos" v-for="todo in todos">{{ todo.text }}</p> -->
    </ol>
    <h3>用户输入</h3>
    <input class="login-input" type="text"  v-model="inputText" placeholder="请输入账号">
    <button v-on:click="inp">button</button>
  </div>
</template>

<script>
export default {
  name: 'grammar',
  data() {
    return {
      msg: 'hello',
      title: '当前时间:' + new Date(),
      see: false,
      todos: [{ text: 'javascript' }, { text: 'vue' }, { text: 'react' }],
      inputText: ''
    };
  },
  methods: {
    /**
     * 修改可见性值
     */
    changeSee() {
      console.log(this.see);
      this.see = !this.see;
    },
    inp() {
      alert(this.inputText);
      console.log(this.inputText);
    }
  }
};
</script>

<style>
</style>
