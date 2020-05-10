<template>
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg" :style="{ backgroundImage: `url('${product.product_image}')` }">
            <ul class="product__item__pic__hover">
                <li><a href="#" @click.prevent="addToWishList(product)"><i class="fa fa-heart"></i></a></li>
                <li><a href="#" @click.prevent="detail"><i class="fa fa-eye"></i></a></li>
                <li><a href="#" @click.prevent="addToCart(product, 1)"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6><a href="#">Crab Pool Security</a></h6>
            <h5>${{product.price}}</h5>
        </div>
    </div>
  </div>
</template>

<script>

import store from '@/store/index.js'
import ProductService from '@/services/ProductService.js'

export default {
  props: {
    product: Object
  },
  methods: {
    openToast(text){
        this.$toasted.success(text, { 
            icon : 'cart-plus',
            theme: "bubble", 
            position: "top-right", 
            duration : 3000,
        });
    },
    detail() {
      this.$router.push({ name: 'product-show', params: { id: this.product.id } })
    },
    addToCart(product, quantity = 1) {
        const payload = {product, quantity}
        store.dispatch('addToCard', payload).then(() => {
          this.openToast('Added to Cart !')
        })
    },
    addToWishList(product) {
        const token = this.$store.getters.token
        ProductService.addToWishList(product.id, token).then(response => {
          this.$store.commit('wishListUpdate', response.data.count)
        })
        .then(() => {
          this.openToast('Added to wishlist !')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
}
</script>

<style scoped>
  .item {
    margin-bottom: 20px;
  }
</style>