<template>
    <div>
        <BreadCrumb/>
    <!-- Shoping Cart Section Begin -->
    <section class="shoping-cart spad">
        <div class="container">
            <div class="row">

                <!-- <div class="col-12" v-if="!initialized && !noItemInCart">
                    <content-loader width="800" height="260">
                        <rect x="64" y="10" rx="3" ry="3" width="60" height="14" /> 
                        <rect x="9" y="36" rx="3" ry="3" width="769" height="4" /> 
                        <rect x="118" y="60" rx="3" ry="3" width="49" height="12" /> 
                        <rect x="367" y="7" rx="3" ry="3" width="60" height="14" /> 
                        <rect x="662" y="6" rx="3" ry="3" width="60" height="14" /> 
                        <rect x="519" y="6" rx="3" ry="3" width="60" height="14" /> 
                        <rect x="72" y="52" rx="0" ry="0" width="30" height="28" /> 
                        <rect x="14" y="179" rx="3" ry="3" width="750" height="4" /> 
                        <rect x="46" y="196" rx="0" ry="0" width="74" height="17" /> 
                        <rect x="45" y="226" rx="0" ry="0" width="73" height="7" /> 
                        <rect x="43" y="240" rx="0" ry="0" width="161" height="25" /> 
                        <rect x="361" y="192" rx="0" ry="0" width="396" height="90" /> 
                        <rect x="353" y="62" rx="3" ry="3" width="412" height="8" /> 
                        <rect x="119" y="147" rx="3" ry="3" width="49" height="12" /> 
                        <rect x="72" y="138" rx="0" ry="0" width="30" height="28" /> 
                        <rect x="353" y="143" rx="3" ry="3" width="411" height="8" /> 
                        <rect x="116" y="103" rx="3" ry="3" width="49" height="12" /> 
                        <rect x="70" y="95" rx="0" ry="0" width="30" height="28" /> 
                        <rect x="354" y="105" rx="3" ry="3" width="408" height="8" />
                    </content-loader>
                </div> -->

                <!-- <div class="col-lg-12" v-if="isEmpty">
                    <img src="https://www.redufy.com/img/png/empty-cart.png" class="mx-auto d-block" alt="">
                </div> -->

                <div class="col-lg-12">
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <!-- <th>Quantity</th> -->
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in wishLists" :key="item.id">
                                <td class="shoping__cart__item">
                                    <img :src="item.product_image" alt="">
                                    <h5>{{item.product_name}}</h5>
                                </td>
                                <td class="shoping__cart__price">
                                    ${{item.price}}
                                </td>
                                <!-- <td class="shoping__cart__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <span class="dec qtybtn" @click="decreaseQty(item.id)">-</span>
                                                <input type="text" :value="item.quantity">
                                            <span class="inc qtybtn" @click="increaseQty(item.id)">+</span></div>
                                    </div>
                                </td> -->
                                <td class="shoping__cart__price">
                                    <button class="btn btn-danger" @click="removeItem(item.id)">Remove</button>
                                </td>
                                 <td class="shoping__cart__price">
                                    <button class="btn btn-success" @click.prevent="addToCart(item, 1)">Add to Cart</button>
                                </td>
                                <td class="shoping__cart__item__close">
                                    <span class="icon_close"></span>
                                </td>
                            </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="shoping__cart__btns">
                        <router-link :to="{ name: 'Shop' }" class="primary-btn cart-btn">CONTINUE SHOPPING</router-link>
                    </div>
                    <div class="col-lg-12">
                        <div class="shoping__continue">
                            <div class="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code">
                                    <button type="submit" class="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <!-- <li>Subtotal <span>${{totalPrice}}</span></li>
                            <li>Discount <span>$0</span></li>
                            <li>Total <span>${{totalPrice}}</span></li> -->
                        </ul>
                        <router-link class="primary-btn" :to="{ name: 'check-out' }">PROCEED TO CHECKOUT</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Shoping Cart Section End -->

    </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue'
import ProductService from '@/services/ProductService.js'
import store from '@/store/index.js'
// import { ContentLoader  } from 'vue-content-loader'
// import { mapGetters } from 'vuex'

export default {
    components: {
        BreadCrumb,
        // ContentLoader
    },
    data() {
      return {
          initialized: true,
          noItemInCart : false,
          wishLists : []
      }
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
        addToCart(product, quantity = 1) {
            const payload = {product, quantity}
            store.dispatch('addToCard', payload).then(() => {
            this.openToast('Added to Cart !')
            })
        },
        removeItem(id) {
            ProductService.wishListDelete(id).then(res => {
                if (res.status == 200) {
                    ProductService.wishlist().then(response => {
                        this.wishLists = response.data.data
                        this.$store.commit('wishListUpdate', response.data.data.length)
                        const user = JSON.parse(localStorage.user);
                        user.wishList = response.data.data.length
                        localStorage.setItem("user", JSON.stringify(user));
                    })
                }
            })
            .then(() => {
                this.openToast('Delete item from cart !')
            })
        }
    },
    created() {
        ProductService.wishlist().then(response => {
            console.log(response.data.data)
            this.wishLists = response.data.data
        })
    },
}
</script>

<style scoped>
    .shoping__cart__item > img {
        width: 70px !important;
        height: 70px !important;
    }

    .shoping__cart__table table tbody tr td.shoping__cart__price {
        width: 110px;
    }
</style>