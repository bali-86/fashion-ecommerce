<template>
  <HeroImg />
  <AllProduct />
</template>
<script>
// import all the component in home page and the import this homepage in router
import HeroImg from "../components/HeroImg.vue";
import AllProduct from "../components/AllProduct.vue";

export default {
  components: {
    HeroImg,
    AllProduct,
  },
};
</script>

<style scoped></style>
