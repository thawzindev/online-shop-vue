import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductShow from "../views/ProductShow.vue";
import ProductInCategory from "../views/ProductInCategory.vue";
import CheckOut from "../views/CheckOut.vue";
import ErrorPage from "../views/ErrorPage.vue";

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
  },
  {
    path: "/category/:id",
    name: "getProductByCategory",
    component: ProductInCategory,
    props: true,
  },
  {
    path: "/check-out",
    name: "check-out",
    component: CheckOut,
    props: true,
  },
  {
    path: "/404",
    name: "error",
    component: ErrorPage,
    props: true,
  },
  {
    path: "*",
    redirect: '/404'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
