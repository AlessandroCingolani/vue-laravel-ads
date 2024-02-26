<script>
import AdsView from "../components/partials/AdsView.vue";
import axios from "axios";
import { store } from "../data/store";
export default {
  name: "SessionView",
  components: {
    AdsView,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    closeModal() {
      let ads = document.getElementById("ads");
      ads.style.display = "none";
      this.inviaValoreAlBackend();
    },
    inviaValoreAlBackend() {
      const valore = true;
      axios
        .post("http://127.0.0.1:8000/api/salva-valore-in-sessione", {
          valore,
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          store.bannerSessionClosed = response.data.disable_modal.close_ads;
        })
        .catch((error) => {
          console.error("Errore durante la richiesta al backend:", error);
        });
    },
    checkSession() {
      axios
        .get("http://127.0.0.1:8000/api/get-session", {
          withCredentials: true,
        })
        .then((response) => {
          // Gestisci la risposta dal backend
          console.log(response.data);
          store.bannerSessionClosed = response.data.session.close_ads;
        })
        .catch((error) => {
          // Gestisci gli errori
          console.error("Errore durante la richiesta:", error);
        });
    },
  },
  mounted() {
    this.checkSession();
  },
};
</script>

<template>
  <div class="about">
    <h1>Session</h1>
    <AdsView :closedAds="store.bannerSessionClosed" @closeModal="closeModal" />
  </div>
</template>
