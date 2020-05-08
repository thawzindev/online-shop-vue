<template>
    <div>
        <BreadCrumb/>

        <section class="product-details spad">
        <div class="container">
            <div class="row">
                
                <!-- content loader started -->
            <div class="col-12" v-if="!initialzed">
                 <content-loader width="400" height="180">
                    <rect x="220" y="12" rx="3" ry="3" width="88" height="5" /> 
                    <rect x="239" y="24" rx="3" ry="3" width="52" height="5" /> 
                    <rect x="190" y="65" rx="3" ry="3" width="164" height="6" /> 
                    <rect x="173" y="103" rx="3" ry="3" width="312" height="1" /> 
                    <rect x="232" y="34" rx="3" ry="3" width="69" height="6" /> 
                    <circle cx="663" cy="243" r="76" /> 
                    <rect x="12" y="11" rx="4" ry="4" width="158" height="150" /> 
                    <rect x="535" y="201" rx="0" ry="0" width="129" height="60" /> 
                    <rect x="106" y="47" rx="0" ry="0" width="1" height="0" /> 
                    <rect x="592" y="210" rx="0" ry="0" width="22" height="169" /> 
                    <rect x="190" y="57" rx="3" ry="3" width="164" height="6" /> 
                    <rect x="190" y="75" rx="3" ry="3" width="164" height="6" /> 
                    <rect x="189" y="87" rx="3" ry="3" width="77" height="9" /> 
                    <rect x="278" y="87" rx="3" ry="3" width="77" height="8" /> 
                    <rect x="210" y="130" rx="3" ry="3" width="137" height="8" /> 
                    <rect x="211" y="120" rx="3" ry="3" width="137" height="7" /> 
                    <rect x="211" y="110" rx="3" ry="3" width="136" height="7" />
                </content-loader>
            </div>
            <!-- content loader ended -->

                <div class="col-lg-6 col-md-6" v-if="initialzed">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large" :src="product.product_image" :alt="product.product_name">
                        </div>

                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text" v-if="initialzed">
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
                        <a href="#" class="primary-btn" @click.prevent="addToCard(product, quantity)">ADD TO CARD</a>
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
                <div class="col-lg-12" v-if="initialzed">
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
import { ContentLoader  } from 'vue-content-loader'

export default {
    components: {
        BreadCrumb,
        ContentLoader 
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
        openToast(){
            this.$toasted.success("added !", { 
                icon : 'cart-plus',
                theme: "bubble", 
                position: "top-right", 
                duration : 3000,
            });
        },
        addToCard(product, quantity = 1) {
        const payload = {product, quantity}
            store.dispatch('addToCard', payload).then(() => {
                this.openToast()
            })
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