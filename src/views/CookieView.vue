<script>
import axios from "axios";
import AdsView from "../components/partials/AdsView.vue";
export default {
  name: "HomeView",
  components: {
    AdsView,
  },
  methods: {
    getAds() {
      axios.get("http://127.0.0.1:8000/api/ads").then((response) => {
        console.log(response.data.ads);
      });
    },
  },
  mounted() {
    this.getAds();
  },
};
</script>

<template>
  <h1>Home</h1>
  <AdsView />
</template>

<style lang="scss" scoped></style>
