<script>
import HeaderView from "./components/HeaderView.vue";
export default {
  name: "App",
  components: {
    HeaderView,
  },
};
</script>

<template>
  <div class="ac_container">
    <div class="container">
      <HeaderView />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@use "../scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
