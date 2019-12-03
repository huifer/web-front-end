<template>
  <div>
    <h1 v-if="hc">条件渲染</h1>
    <ol>
      <li v-if="bo===1">1</li>
      <li v-else-if="bo===2">2</li>
      <li v-else>3</li>
    </ol>

    <input class="login-input" type="text" v-model="inputText" placeholder="请输入账号" />
    <p v-if="inputText === 'admin'">成功</p>
    <p v-else>失败请输入admin</p>
    <input type="text" v-model="numb" placeholder="输入一个数字0-10" />
    <button @click="dowork">btn</button>
  </div>
</template>

<script>
var num = 4;

export default {
  name: 'conditional',
  data() {
    return {
      hc: true,
      bo: 1,
      inputText: '',
      numb: 0
    };
  },
  methods: {
    dowork() {
      if (this.numb > num) {
        alert('大了');
      } else if (this.numb < num) {
        alert('小了');
      } else {
        alert('ok');
      }
    }
  }
};
</script>

<style>
</style>
