<template>
  <div>
    <div class="container" style="z-index: -999">
      <h1 class="heading my-5 text-center">HOT PRODUCTS</h1>
      <div class="row">
        <div class="col-lg-3" v-for="product in products" :key="product.id">
          <div class="card border-0">
            <div class="card-body py-5 bg-light">
              <img :src="product.thumbnail" class="man-img" alt="" />
            </div>
            <div class="card-footer border-0 text-center bg-white">
              <div class="pricestyle">
                <h5>{{ product.title }}</h5>
                <p>{{ product.price }}</p>
              </div>
              <div class="des1">
                <p>{{ product.description }}</p>
              </div>

              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
                class="btnsm"
                ><button class="btn btn-secondary align-self-end">
                  SEE MORE
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="appComp">
      <ThePagination
        :totalPages="10"
        :perPage="10"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import ThePagination from "../components/ThePagination.vue";
export default {
  name: "AppComp",
  components: {
    ThePagination,
  },
  data() {
    return {
      currentPage: 1,
      limit: 12,
      skip: 0,
    };
  },
  methods: {
    onPageChange(page) {
      if (page === 1) this.skip = 0;
      this.skip = this.limit * (page - 1);
      this.currentPage = page;
      // we will dispatch this to the action in store
      this.$store.dispatch("getProducts", [this.limit, this.skip]);
    },
  },
  computed: {
    // this will return all the product from store
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    // we will dispatch this to the action in store
    this.$store.dispatch("getProducts", [this.limit, this.skip]);
  },
};
</script>

<style scoped>
.heading {
  font-weight: 500;
  font-size: 2.6rem;
}
.man-img {
  width: 100%;
  height: 40vh;
  border: 2px solid gray;
}

.btnsm {
  height: 30px;
  width: 50%;
  background-color: rgb(245, 151, 170);
  margin-bottom: 41px;
  border: none;
}
.pricestyle {
  height: 16vh;
}
.des1 {
  height: 28vh;
  text-align: left;
}
</style>
