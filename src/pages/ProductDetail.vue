<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="mt-5 d-flex flex-wrap">
          <div class="col-12 col-md-5 mt-5">
            <div class="main-img">
              <img class="img-fluid" :src="product.thumbnail" alt="ProductS" />
              <div class="row my-3 previews">
                <div class="col-md-3">
                  <img class="w-100" :src="product.thumbnail" alt="Sale" />
                </div>
                <div class="col-md-3">
                  <img class="w-100" :src="product.thumbnail" alt="Sale" />
                </div>
                <div class="col-md-3">
                  <img class="w-100" :src="product.thumbnail" alt="Sale" />
                </div>
                <div class="col-md-3">
                  <img class="w-100" :src="product.thumbnail" alt="Sale" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-7 mt-5">
            <div class="main-description ms-md-5">
              <div class="category text-bold">
                Category: {{ product.category }}
              </div>
              <div class="product-title text-bold my-3">
                {{ product.title }}
              </div>

              <div class="price-area my-4">
                <p class="old-price mb-1">
                  <del>${{ product.price }}</del>
                  <span class="old-price-discount text-danger">{{
                    product.discountPercentage
                  }}</span>
                </p>
                <p class="new-price text-bold mb-1">${{ product.price }}</p>
                <p class="text-secondary mb-1">
                  (Additional tax may apply on checkout)
                </p>
              </div>

              <div class="buttons d-flex my-5">
                <div class="block">
                  <a href="#" class="shadow btn custom-btn">Wishlist</a>
                </div>
                <div class="block">
                  <!--Here is addToCart function on click which can add item into cart  -->
                  <button
                    class="shadow btn custom-btn"
                    @click="addToCart(product)"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div class="product-details my-4 ms-md-5">
              <p class="details-title text-color mb-1">Product Details</p>
              <p class="description">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: undefined,

      productId: this.$route.params.id,
      PDetail: {},
      response: null,
    };
  },

  //  here we do some action in store
  methods: {
    addToCart(details) {
      this.$store.dispatch("addToCart", details);
    },
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.productId);
  },
};
</script>
<style scoped>
.text-bold {
  font-weight: 800;
}

text-color {
  color: #0093c4;
}

.main-img img {
  width: 100%;
}

/* Preview images */
.previews img {
  width: 100%;
  height: 140px;
}

.main-description .category {
  text-transform: uppercase;
  color: #0093c4;
}

.main-description .product-title {
  font-size: 2.5rem;
}

.old-price-discount {
  font-weight: 600;
}

.new-price {
  font-size: 2rem;
}

.details-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  color: #757575;
}

.buttons .block {
  margin-right: 5px;
}

.quantity input {
  border-radius: 0;
  height: 40px;
}

.custom-btn {
  text-transform: capitalize;
  background-color: #0093c4;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 0;
}

.custom-btn:hover {
  background-color: #0093c4 !important;
  font-size: 18px;
  color: white !important;
}
</style>
