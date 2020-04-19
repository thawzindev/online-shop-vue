<template>
  <div class="col-lg-2 col-sm-4 col-md-3">
    <router-link :to="{ name: 'product-show', params: { 'id' : product.id } }">
      <div class="item">
        <div class="card">
        <img :src="product.productImage" :alt="product.productName">

        <div class="card-body">
          <p class="card-text">{{ product.productName }}</p>
          <span>KS: {{ product.productPrice }}</span>
        </div>
      </div>
    </div>
  </router-link>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
  .item {
    margin-bottom: 20px;
    cursor: pointer;
  }
  .card-body {
    padding: 0.4rem;
  }
  p {
    margin-bottom: 0.4rem;
  }
  img {
    height: 120px;
  }
  a:hover {
    text-decoration: none;
  }
  span {
    color: black;
  }
  .card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  }

</style>