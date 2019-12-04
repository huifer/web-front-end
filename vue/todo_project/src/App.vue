<template>
  <div id="app">
    <Heard />
    <Todo />
    <Footer />
  </div>
</template>

<script>
import Heard from './components/Heard';
import Footer from './components/Footer';
import Todo from './components/Todo';
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
