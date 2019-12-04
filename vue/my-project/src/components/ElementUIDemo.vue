<template>
  <div>
    <h1>element ui</h1>
    <ol>
      <ul><label>图标 icon 通过class来替换不同的图标</label><i class="el-icon-edit"></i></ul>
      <ul>
        <el-button @click="btn"
                   type="success">
          btn
        </el-button>
      </ul>
      <ul>
        <el-link type="success" href="/">首页链接</el-link>
      </ul>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ElementUIDemo',
    data() {

    },
    methods: {
      btn() {
        alert('btn');
      }
    }
  };
</script>

<style scoped>

</style>
