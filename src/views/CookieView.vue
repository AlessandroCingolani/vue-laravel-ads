<script>
import AdsView from "../components/partials/AdsView.vue";
export default {
  name: "HomeView",
  components: {
    AdsView,
  },
  data() {
    return {
      bannerCookieClosed: false,
    };
  },
  methods: {
    closeModal() {
      let ads = document.getElementById("ads");
      ads.style.display = "none";
      let now = new Date();

      // Calcola la data di scadenza aggiungendo un minuto alla data corrente
      let expires = new Date(now.getTime() + 60000); // 60000 millisecondi corrispondono a 1 minuto

      // Formatta la data di scadenza nel formato corretto per i cookie
      let expiresString = expires.toUTCString();
      document.cookie = `bannerCookieClosed=true;expires=${expiresString}; path=Percorso`;
    },
    priceDiscount(price, discount) {
      return price - (price * discount) / 100;
    },
  },
  mounted() {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    // Search with for of cookie and when find break the loop
    for (const cookie of cookies) {
      const [name] = cookie.split("=");
      if (name === "bannerCookieClosed") {
        this.bannerCookieClosed = true;
        console.log(this.bannerCookieClosed);
        break;
      }
    }
  },
};
</script>

<template>
  <h1>Cookie</h1>
  <AdsView :closedAds="this.bannerCookieClosed" @closeModal="closeModal" />
</template>

<style lang="scss" scoped></style>
