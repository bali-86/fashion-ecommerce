<template>
  <div
    class="container-fluid d-flex flex-wrap justify-content-center gap-5 mt-5"
  >
    <div class="my-card col-lg-3" v-for="product in item" :key="product">
      <img class="my-card-img" :src="product.thumbnail" />
      <div class="my-card-body trainer-card-body">
        <h5>{{ product.title }}</h5>
        <p>{{ product.category }}</p>
        <p>{{ product.description }}</p>
        <div class="d-flex mt-3">
          <!-- pass the id in param for getting the specific data of that id -->
          <router-link
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
            class="btnsm"
            ><button class="my-card-btn mt-1">SEE MORE</button></router-link
          >
          <h3 class="mx-3">${{ product.price }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoryDetail",
  data() {
    return {
      item: [],
    };
  },

  mounted() {
    // here we pass the param data in Api
    axios
      .get(`https://dummyjson.com/products/category/${this.$route.params.cat}`)
      .then((resp) => {
        console.log(resp.data.products);
        this.item = resp.data.products;
      });
  },
};
</script>

<style scoped>
body {
  background-color: #eee;
}
.my-card {
  /* min-width: 0; */
  background-color: #fff;
  background-clip: border-box;
  box-shadow: 0px 0px 8px;
  margin-bottom: 28px;
  border-radius: 35px 0;
  overflow: hidden;
  transition: 0.5s;
}
.my-card:hover {
  box-shadow: 0px 0px 8px #c81a3b;
}
.my-card img {
  height: 200px;
  width: 100%;
}
.my-card-body {
  padding: 10px;
  /* margin-bottom: 20px; */
}
.my-card-body h5 {
  text-transform: capitalize;
  /* line-height: 25px; */
  font-size: 25px;
}
.my-card-body p {
  margin: 5px 0;
  color: #67696b;
}

.my-card-btn {
  color: rgb(231, 231, 231);
  background-color: #c81a3b;
  /* padding: 1px 20px; */
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 10px 0;
  transition: 0.5s;
  border: none;
}
.my-card-btn:hover {
  color: rgb(36, 34, 34);
  background: #eba6b2;
}
</style>
