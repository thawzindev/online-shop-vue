<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1"><router-link to="/">Home</router-link> </span>
      <span class="navbar-text">
        <a href="#" @click.prevent="showCart" class="float-right"><span class="fa fa-shopping-cart"></span> ({{cartCount}})</a>
      </span>
    </nav>
      <Cart v-if="showModal" @closeCart="showModal = false"/>
    <router-view/>
  </div>
</template>

<script>

import Cart from '@/components/Cart.vue'

export default {
    components: {
        Cart
    },
    methods: {
        showCart() {
          console.log("SHOW")
          this.showModal = true
        },
    },
    data() {
        return {
            showModal: false,
        }
    },
    computed: {
      cartCount() {
        return this.$store.getters.cartCount
      }
    },
}

</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  nav {
    margin-bottom: 20px;
  }
</style>