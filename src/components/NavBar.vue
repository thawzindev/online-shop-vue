<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <!-- <router-link to="/about" class="float-right">Cart</router-link> -->
      <a href="#" @click="showCart" class="float-right">Cart ({{cartCount}})</a>
      <Cart v-if="showModal" @closeCart="showModal = false"/>
    </div>
    <router-view />
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