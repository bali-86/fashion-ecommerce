import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/HomePage.vue";

import ProductDetail from "./pages/ProductDetail.vue";
import CategoryDetail from "./pages/CategoryDetail.vue";
import CartDetail from "./pages/CratDetail.vue";
import LoginPage from "./pages/LoginPage.vue";
import CheckOut from "./pages/CheckOut.vue";
const routes = [
  {
    name: Home,
    path: "/",
    component: Home,
  },
  {
    name: CartDetail,
    path: "/CartDetail",
    component: CartDetail,
  },
  //  it will get also product id that will show specific product
  {
    path: "/productdetail/:id",
    component: ProductDetail,
    name: "ProductDetail",
  },
  {
    name: "CategoryDetail",
    path: "/categorydetail/:cat",
    component: CategoryDetail,
  },
  {
    name: "loginpage",
    path: "/loginpage",
    component: LoginPage,
  },
  {
    name: "checkout",
    path: "/checkout",
    component: CheckOut,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
