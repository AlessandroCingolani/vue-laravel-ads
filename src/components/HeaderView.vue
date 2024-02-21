<script>
export default {
  name: "HeaderView",
};
</script>

<template>
  <nav>
    <router-link to="/">Cookie</router-link> |
    <router-link to="/session">Session</router-link>
  </nav>
</template>

<style lang="scss">
nav {
  text-align: end;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
