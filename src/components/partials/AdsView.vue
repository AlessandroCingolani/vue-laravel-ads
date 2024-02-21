<script>
export default {
  name: "AdsView",
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
  <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#exampleModal"
  >
    Vedi i piani
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
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
</style>
