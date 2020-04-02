<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>App Vue</h1>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/home/Home";
import ManterGaleria from "./components/galeria/ManterGaleria";

export default {
  name: "App",
  components: {
    Home,
    ManterGaleria
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
