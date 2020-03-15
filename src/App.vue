<template>
  <section class="section">
    <div id="container">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import "bulma/css/bulma.css";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    appHeader: Header
  }
};
</script>

<style>
#app {
  font-family: "Alice", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
