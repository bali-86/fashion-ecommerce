<template>
  <Header />
  <HeroImg />
  <AllProduct />
  <TheFooter />
</template>
<script>
// import all the component in home page and the import this homepage in router
import Header from "../components/layouts/TheHeader.vue";
import HeroImg from "../components/HeroImg.vue";
import AllProduct from "../components/AllProduct.vue";
import TheFooter from "../components/layouts/TheFooter.vue";

export default {
  components: {
    Header,
    HeroImg,
    AllProduct,
    TheFooter,
  },
};
</script>

<style scoped></style>
