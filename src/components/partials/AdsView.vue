<script>
import { store } from "../../data/store";
// import axios from "axios";
export default {
  name: "AdsView",
  data() {
    return {
      store,
      bannerCookieClosed: false,
      token: "",
    };
  },
  methods: {
    closeModal() {
      let ads = document.getElementById("ads");
      ads.style.display = "none";
      // this.inviaValoreAlBackend();
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
    // inviaValoreAlBackend() {
    //   const valore = true;
    //   axios
    //     .post("http://127.0.0.1:8000/api/salva-valore-in-sessione", {
    //       valore,
    //       withCredentials: true,
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //       this.bannerCookieClosed = true;
    //     })
    //     .catch((error) => {
    //       console.error("Errore durante la richiesta al backend:", error);
    //     });
    // },
    // checkSession() {
    //   axios
    //     .get("http://127.0.0.1:8000/api/get-session", {
    //       withCredentials: true,
    //     })
    //     .then((response) => {
    //       // Gestisci la risposta dal backend
    //       console.log(response.data.valore);
    //       this.token = response.data.valore._token;
    //       localStorage.setItem("session_token", this.token);
    //       console.log(this.token);
    //     })
    //     .catch((error) => {
    //       // Gestisci gli errori
    //       console.error("Errore durante la richiesta:", error);
    //     });
    // },
  },
  mounted() {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    // Search with for of cookie and when find break the loop
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "bannerCookieClosed") {
        this.bannerCookieClosed = value;
        console.log(this.bannerCookieClosed);
        break;
      }
    }
    // this.checkSession();
  },
};
</script>

<template>
  <h1>Passa a premium gratis per 1 mese</h1>
  <p>
    A termine dell' offerta, solo &euro; 9,99 al mese. Annulla in qualsiasi
    momento
  </p>

  <!-- Modal -->
  <!-- Button trigger modal -->
  <button type="button" class="ac_btn">VEDI I PIANI</button>

  <!-- Modal -->

  <div
    v-if="store.isLoad && !bannerCookieClosed"
    id="ads"
    class="modal show"
    tabindex="-1"
    role="dialog"
    style="display: block"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <span class="">Pubblicità</span>
          <span class="close-modal" @click="closeModal()">x</span>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-column align-items-center">
            <h3>
              ${{
                priceDiscount(store.ads.price, store.ads.discount).toFixed(2)
              }}
            </h3>
            <span><small>per month</small></span>
            <div class="info">
              <h6>Includes</h6>
              <ul>
                <li>
                  A Spotify Premium subscription (Ad free, listen offline)
                </li>
                <li>No data charges for music listening on Spotify Premium</li>
                <li>12-month contract applies</li>
              </ul>
            </div>
            <button class="btn btn-danger">Subscribe</button>
            <div class="full-price">
              Or ${{ store.ads.price }} month without contract
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End Modal -->
  <p>
    <small
      >Si applicano Termini e condizioni. L'offerta di 1 mese gratis non è
      disponibile per gli utenti che hanno già provato Spotify Premium.</small
    >
  </p>
</template>

<style lang="scss" scoped>
.modal-header {
  background-color: rgb(30, 215, 96);
  position: relative;
  .close-modal {
    position: absolute;
    text-align: center;
    color: rgb(73, 132, 221);
    top: -10px;
    right: -10px;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      scale: 1.1;
    }
  }
}
h1 {
  font-size: 3rem;
  padding-bottom: 20px;
}
button {
  margin-bottom: 20px;
}
p {
  padding-bottom: 20px;
  small {
    font-size: 0.7rem;
  }
}
#ads {
  .modal-content {
    border: 5px solid;
    border-image: linear-gradient(to right, black, white, black) 1;
  }
  .modal-body {
    color: black;
    h3 {
      font-weight: bold;
    }
    ul {
      padding-left: 0;
      list-style-position: inside;
      li {
        color: rgba(128, 128, 128, 0.839);
        font-size: 0.8rem;
      }
    }
    .btn {
      border-radius: 20px;
      padding: 5px 30px;
    }
  }
}

.ac_btn {
  font-size: 0.8rem;
  padding: 10px 30px;
  color: white;
  border-radius: 20px;
  border: none;
  background-color: black;
  &:hover {
    scale: 1.1;
  }
}
.full-price {
  font-size: 0.8rem;
  color: rgb(96, 198, 200);
}
</style>
