<script>
import axios from "axios";
import { store } from "../src/data/store";
import HeaderView from "./components/HeaderView.vue";
export default {
  name: "App",
  components: {
    HeaderView,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getAds() {
      store.isLoad = false;
      axios.get("http://127.0.0.1:8000/api/ads").then((response) => {
        store.ads = response.data.ads;
        store.isLoad = true;
      });
    },
  },
  mounted() {
    this.getAds();
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
