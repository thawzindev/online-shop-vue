<template>
  <div class="col-md-3 col-sm-6 item">
    <div class="product-grid6">
        <div class="product-image6">
            <a href="#">
                <img :src="product.product_image" @error="addDefaultImage" :alt="product.product_name" class="pic-1">
            </a>
        </div>
        <div class="product-content">
            <h3 class="title"><a href="#">{{ product.product_name }}</a></h3>
            <p>{{ product.category }}</p>
            <div class="price">{{ product.price }} <span>MMK</span>
                <!-- <span>{{ product.productPrice }}</span> -->
            </div>
        </div>
        <ul class="social">
          <router-link :to="{ name: 'product-show', params: { 'id' : product.uuid } }">
            <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
          </router-link>
            <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
            <li><a href="#" data-tip="Add to Cart" @click.prevent="addToCard(product.uuid)"><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
    </div>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/item.css'
import store from '@/store/index.js'

export default {
  props: {
    product: Object
  },
  methods: {
    addToCard(uuid) {
        store.dispatch('addToCard', uuid)
    },
    addDefaultImage(event) {
      event.target.src = "https://cdn3.iconfinder.com/data/icons/modifiers-add-on-1/48/v-17-512.png"
    }
  },
}
</script>

<style scoped>
  .item {
    margin-bottom: 20px;
  }
</style>