<template>
    <div>
        <BreadCrumb/>

    <!-- Shoping Cart Section Begin -->

    <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            <tr v-for="item in items" :key="item.id">
                                <td class="shoping__cart__item">
                                    <img :src="item.product_image" alt="">
                                    <h5>{{item.product_name}}</h5>
                                </td>
                                <td class="shoping__cart__price">
                                    ${{item.price}}
                                </td>
                                <td class="shoping__cart__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <span class="dec qtybtn">-</span>
                                                <input type="text" :value="item.quantity">
                                            <span class="inc qtybtn">+</span></div>
                                    </div>
                                </td>
                                <td class="shoping__cart__total">
                                    ${{item.perProductPrice }}
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
                            <li>Subtotal <span>${{this.totalPrice }}</span></li>
                            <li>Total <span>${{this.totalPrice }}</span></li>
                        </ul>
                        <!-- <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a> -->
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

export default {
    components: {
        BreadCrumb,
        // ProductInCart
    },
    data() {
      return {
          items: [],
          totalPrice : 0,
          initialValue : 0,
          initialized: false,
      }
    },
    created() {   
      const products = this.$store.getters.cartItems

      products.map(
        item => ProductService.getProduct(item.id)
        .then(response => {
            response.data.quantity = item.quantity
            response.data.perProductPrice = Math.round(item.quantity * response.data.price).toFixed(3)
            this.items.push(response.data);
        })
        .then(() => {
          this.totalPrice = this.items.reduce((a, item) => +a + +item.perProductPrice, 0).toFixed(3)
        })
        .then(() => {
          this.initialized = true
        })
        .catch(err => {
            console.log(err);
        })
      )
    },
}
</script>

<style scoped>
    .shoping__cart__item > img {
        width: 70px !important;
        height: 70px !important;
    }
</style>