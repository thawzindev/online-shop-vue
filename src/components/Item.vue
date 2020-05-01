<template>
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg" :style="{ backgroundImage: `url('${product.product_image}')` }">
            <ul class="product__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#" @click.prevent="detail"><i class="fa fa-eye"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6><a href="#">Crab Pool Security</a></h6>
            <h5>$30.00</h5>
        </div>
    </div>
  </div>
</template>

<script>

// import store from '@/store/index.js'

export default {
  props: {
    product: Object
  },
  methods: {
    detail() {
      this.$router.push({ name: 'product-show', params: { id: this.product.id } })
    }
  },
}
</script>

<style scoped>
  .item {
    margin-bottom: 20px;
  }
</style>