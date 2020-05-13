import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductShow from "../views/ProductShow.vue";
import ProductInCategory from "../views/ProductInCategory.vue";
import CheckOut from "../views/CheckOut.vue";
import Shop from "../views/Shop.vue";
import ErrorPage from "../views/ErrorPage.vue";
import PaymentConfirm from "../views/PaymentConfirm.vue";
import Cart from "../views/Cart.vue";
import ContactUs from "../views/ContactUs.vue";
import Blog from "../views/Blog.vue";
import Complete from "../views/Complete.vue";
import Login from "../views/Login.vue";
import WishList from "../views/WishList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    props: true,
  },
  {
    path: "/success-order",
    name: "Complete",
    component: Complete,
    props: true,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    props: true,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
    props: true,
  },
  {
    path: "/product/:id/detail",
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
    path: "/wishlist",
    name: "wishList",
    component: WishList,
    props: true,
  },
  {
    path: "/payment-confirm",
    name: "payment-confirm",
    component: PaymentConfirm,
    props: true,
  },
  {
    path: "/404",
    name: "error",
    component: ErrorPage,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true,
  },
  {
    path: "*",
    redirect: '/404'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    console.log(from,to)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0  }
    }
  }
});

export default router;
