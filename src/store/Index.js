import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    product: {},
    categories: [],
    carts: [],
  },

  //                     Mutation

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_CATEGORY(state, categories) {
      state.categories = categories;
    },
    UPDATE_CART(state, cart) {
      state.carts = cart;
    },
    REMOVE_FROM_CART(state, item) {
      state.carts = state.carts.filter((items) => {
        return items.id !== item.id;
      });
    },
  },

  //       All the Action perform here

  actions: {
    //  this api will get all the products and show them into allproduct componenet
    getProducts({ commit }, [limit, skip]) {
      console.log(limit, skip);
      axios
        .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        .then((resp) => {
          commit("SET_PRODUCTS", resp.data.products);
        });
    },

    // this will get specific id from api and show that specific product

    getProduct({ commit }, productId) {
      axios.get(`https://dummyjson.com/products/${productId}`).then((resp) => {
        commit("SET_PRODUCT", resp.data);
      });
    },

    // this api will get all the categories

    getCategory({ commit }) {
      axios.get("https://dummyjson.com/products/categories").then((resp) => {
        commit("SET_CATEGORY", resp.data);
      });
    },

    // Here we push the product into cart
    addToCart(context, id) {
      const cart = context.state.carts;
      cart.push(id);
      context.commit("UPDATE_CART", cart);
    },

    // Here we remove item from cart
    removeFromCart({ commit }, items) {
      commit("REMOVE_FROM_CART", items);
    },
  },

  //       Getters

  getters: {
    // here we get the quantity of product in cart
    cartItemCount(state) {
      return state.carts.length;
    },

    // here we get total price of selected items in count

    cartTotalPrice(state) {
      let total = 0;
      state.carts.forEach((items) => {
        total += items.price;
      });
      return total;
    },
  },
});
export default store;
