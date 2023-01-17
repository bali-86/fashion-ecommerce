<template>
  <the-header></the-header>
  <router-view />
  <!-- import header and footer in app.vue so that it will show in all the categories -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style></style>
