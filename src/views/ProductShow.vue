<template>
    <div>
        <BreadCrumb/>
        <section class="product-details spad" v-if="initialzed">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large" :src="product.product_image" :alt="product.product_name">
                        </div>

                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{{ product.product_name }}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">${{ product.price }}</div>
                        <p>{{ product.description }}</p>
                        <div class="product__details__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                <span class="dec qtybtn" @click.prevent="qtyReduce">-</span>
                                    <input type="text" :value="quantity">
                                <span class="inc qtybtn" @click.prevent="qtyIncrease">+</span></div>
                            </div>
                        </div>
                        <a href="#" class="primary-btn" @click.prevent="addToCard(product.id, quantity)">ADD TO CARD</a>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                        <ul>
                            <li><b>Availability</b> <span>{{ product.in_stock == 1 ? 'in stock' : 'out of stock'}}</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Weight</b> <span>0.5 kg</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="false">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
                            </li>
                        </ul>
                        <div class="tab-content">
                     
                            <div class="tab-pane active" id="tabs-2" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p> {{ product.description }} </p>
                                    <p> {{ product.description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>

// import store from '@/store/index.js'
import BreadCrumb from '@/components/BreadCrumb.vue'
import ProductService from '@/services/ProductService.js'
import store from '@/store/index.js'

export default {
    components: {
        BreadCrumb
    },
    data() {
        return {
            product: Object,
            initialzed: false,
            quantity: 1
        }
    },
    props: ['id'],
    created() {
        ProductService.getProduct(this.id)
        .then(response => {
            console.log(response)
            if (Object.entries(response.data).length === 0) {
                this.$router.push({ name: 'error'})
            }
            this.product = response.data;
        })
        .then(() => {
            this.initialzed = true
        })
        .catch(err => {
            console.log("err" + err);
        })
    },
    methods: {
        addToCard(id, quantity = 0) {
            const payload = {id, quantity}
            store.dispatch('addToCard', payload)
        },
        qtyReduce() {
            if (this.quantity !== 1) {
                this.quantity--
            }
        },
        qtyIncrease() {
            this.quantity++
        }
    },
}
</script>

<style scoped>
   
</style>