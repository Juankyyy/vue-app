<template>
  <BusinessNavbar />
  <router-view />
</template>

<script>
  // import AppNavbar from "./components/AppNavbar.vue"
  import BusinessNavbar from "./components/HomePageComponents/BusinessNavbar.vue";

  export default {
    name: "App",
    components: {
      BusinessNavbar
    }
  }
</script>

<style>

</style>
