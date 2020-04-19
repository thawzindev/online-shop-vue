import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductShow from "../views/ProductShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product/:id",
    name: "product-show",
    component: ProductShow,
    props: true,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
