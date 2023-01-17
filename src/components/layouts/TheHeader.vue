<template>
  <div>
    <nav
      class="navbar navbar-expand position-fixed w-100 bg-light fixed-top"
      style="z-index: 999"
    >
      <div class="container">
        <router-link class="navbar-brand" to="/">Fashion</router-link>
        <button class="navbar-toggler" type="button"></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto my-2 my-lg-0">
            <li class="nav-item d-none d-lg-block my-auto">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <div class="dropdown1 dropdown">
                <a class="nav-link" href="#">CATEGORIES</a>
                <div class="dropdown-content">
                  <!-- here is a v-for condition for getting all the categories -->
                  <div v-for="category in categories" :key="category">
                    <!-- pass the category name to the categorydetail page -->
                    <router-link
                      :to="{
                        name: 'CategoryDetail',
                        params: { cat: category },
                      }"
                      >{{ category }}</router-link
                    >
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item d-none d-lg-block">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div class="input-group d-none d-lg-flex">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" />
            <!-- <label class="form-label" for="form1">Search</label> -->
          </div>
          <button type="button" class="btn btn-primary">
            <i class="fa-solid fa-search"></i>
          </button>
        </div>

        <button
          id="cartbtn"
          style="width: 7rem"
          class="btn btn-white bg-white btn-md mb-2 text-decoration-none"
        >
          <router-link to="/CartDetail"
            >{{ cartItemCount }} <i class="fa-solid fa-cart-shopping"></i
          ></router-link>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { list: undefined, categories: [] };
  },
  mounted() {
    // this api will get all the categories
    axios.get("https://dummyjson.com/products/categories").then((resp) => {
      const list = resp.data;
      console.log(list);
      this.categories = list;
    });
  },
  computed: {
    // this will show the counter in cart
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  font-size: 2rem;
  color: rgb(218, 11, 105);
  font-family: "Pacifico", cursive;
}
.navbar-brand:hover {
  color: black;
}
.nav-item a {
  margin-right: 15px;
  margin-left: 15px;
  color: black;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}
.nav-item a:hover {
  color: rgb(218, 11, 105);
}
.fa-regular,
.fa-brands {
  color: rgb(218, 11, 105);
  font-size: 1.1rem;
  cursor: pointer;
  margin-left: 15px;
}

.dropdown1 {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  overflow-y: auto;
  height: 80vh;
}
.dropdown-content div {
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  /* letter-spacing: 0.1rem; */
  cursor: pointer;
}

.dropdown-content a {
  color: black;
  padding: 6px 8px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
#cartbtn a {
  text-decoration: none;
  color: black;
  text-decoration-style: none !important;
}
</style>
