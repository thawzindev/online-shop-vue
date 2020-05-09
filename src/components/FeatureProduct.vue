<template>

        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" style="">
        <div class="featured__item">
            <div class="featured__item__pic set-bg" data-setbg="img/product/product-4.jpg" :style="{ backgroundImage: `url('${product.product_image}')` }">
                <ul class="featured__item__pic__hover">
                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#" @click.prevent="detail"><i class="fa fa-eye"></i></a></li>
                    <li><a href="#" @click.prevent="addToCart(product, 1)"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div class="featured__item__text">
                <h6><a href="#">{{product.product_name}}</a></h6>
                <h5>{{product.price}}</h5>
            </div>
        </div>
    </div>

</template>

<script>
    import store from '@/store/index.js'

    export default {
    props: {
        product: Object
    },
    methods: {
        openToast(){
            this.$toasted.success("added !", { 
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
            this.openToast()
            })
        },
    },
    }
</script>

<style scoped>
  .item {
    margin-bottom: 20px;
  }
</style>