<template>
  <div>
    <section class="p-3 mt-5">
      <div class="container pt-5">
        <div class="row w-100">
          <div class="col-lg-12 col-md-12 col-12">
            <h3 class="display-5 mb-2 text-center">Shopping Cart</h3>
            <p class="mb-5 text-center">
              {{ cartItemCount }}
              items in your cart
            </p>
            <table
              id="shoppingCart"
              class="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style="width: 60%">Product</th>
                  <th style="width: 12%">Price</th>
                  <th style="width: 10%">Quantity</th>
                  <th style="width: 16%"></th>
                </tr>
              </thead>
              <tbody v-for="items in carts" :key="items.id">
                <tr>
                  <td data-th="Product">
                    <div class="row">
                      <div class="col-md-3 text-left">
                        <img
                          :src="items.thumbnail"
                          alt=""
                          class="img-fluid d-none d-md-block rounded mb-2 shadow"
                        />
                      </div>
                      <div class="col-md-9 text-left mt-sm-2">
                        <h4>{{ items.title }}</h4>
                        <p class="font-weight-light">{{ items.category }}</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">{{ items.price }}</td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      class="form-control form-control-lg text-center"
                      value="1"
                      v-bind="number"
                    />
                  </td>
                  <td class="actions" data-th="">
                    <div class="text-right">
                      <button
                        class="btn btn-white border-secondary bg-white btn-md mb-2"
                        @click="removeFromCart(items)"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <div class="float-right text-right">
              <h4>Subtotal: {{ cartTotalPrice }}</h4>
              <h1>{{ cartTotalPrice }}</h1>
            </div>
          </div>
        </div>
        <div class="row mt-4 d-flex align-items-center">
          <div class="col-sm-6 order-md-2 text-right">
            <router-link
              to="/loginpage"
              href="catalog.html"
              class="btn btn-primary mb-4 btn-lg pl-5 pr-5"
              >Checkout</router-link
            >
          </div>
          <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <router-link to="/"> contiue shopping</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    // we pass the specific data from cart for reomoving
    removeFromCart(items) {
      this.$store.dispatch("removeFromCart", items);
    },
  },

  computed: {
    carts() {
      // we will get all the carts from store
      return this.$store.state.carts;
    },
    cartTotalPrice() {
      // getting total price from getter
      return this.$store.getters.cartTotalPrice;
    },
  },
};
</script>
