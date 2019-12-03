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
  </div>
</template>

<script>
export default {
  name: 'conditional',
  data() {
    return {
      hc: true,
      bo: 1,
      inputText: ''
    };
  }
};
</script>

<style>
</style>
