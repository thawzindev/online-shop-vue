<template>
    <div>
        <section class="checkout spad">
        <div class="container">
            <!-- <div class="row">
                <div class="col-lg-12">
                    <h6><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                    </h6>
                </div>
            </div> -->

            <div class="col-lg-12" v-if="isEmpty">
                    <img src="https://www.redufy.com/img/png/empty-cart.png" class="mx-auto d-block" alt="">
            </div>

            <div class="checkout__form" v-if="!isEmpty">
                <h4>Billing Details</h4>
                <form action="#" @submit.prevent="submit">
                    <div class="row">
                        <div class="col-lg-7 col-md-6">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="checkout__input">
                                        <p>Name<span>*</span></p>
                                        <input type="text" placeholder="Name" v-model="inputs.name">
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Address<span>*</span></p>
                                <input type="text" placeholder="Street Address" class="checkout__input__add" v-model="inputs.address">
                                <input type="text" placeholder="Aspartment, suite, unite ect (optinal)" v-model="inputs.apartment">
                            </div>
                            <div class="checkout__input">
                                <p>Town/City<span>*</span></p>
                                <input type="text" v-model="inputs.township">
                            </div>
                            <!-- <div class="checkout__input">
                                <p>Country/State<span>*</span></p>
                                <input type="text">
                            </div> -->
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input type="text" v-model="inputs.phone">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input type="email" v-model="inputs.email">
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input__checkbox">
                                <label for="acc">
                                    Create an account?
                                    <input type="checkbox" id="acc" v-model="inputs.create_account">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <p>Create an account by entering the information below. If you are a returning customer
                                please login at the top of the page</p>
                            <div class="checkout__input">
                                <p>Account Password<span>*</span></p>
                                <input type="password" v-model="inputs.account_pw">
                            </div>
                            <!-- <div class="checkout__input__checkbox">
                                <label for="diff-acc">
                                    Ship to a different address?
                                    <input type="checkbox" id="diff-acc">
                                    <span class="checkmark"></span>
                                </label>
                            </div> -->
                            <div class="checkout__input">
                                <p>Order notes<span>*</span></p>
                                <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." v-model="inputs.notes">
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <div class="checkout__order">
                                <h4>Your Order</h4>
                                <div class="checkout__order__products">Products <span>Total</span></div>
                                <ul>
                                    <li v-for="item in items" :key="item.id">{{item.product.product_name }} x {{item.quantity}} <span>$ {{ item.perItemPrice }}</span></li>
                                </ul>
                                <div class="checkout__order__subtotal">Subtotal <span>${{totalPrice}}</span></div>
                                <div class="checkout__order__total">Total <span>${{totalPrice}}</span></div>
                                <!-- <div class="checkout__input__checkbox">
                                    <label for="acc-or">
                                        Create an account?
                                        <input type="checkbox" id="acc-or">
                                        <span class="checkmark"></span>
                                    </label>
                                </div> -->
                                <p id="note">*Only cash on delivery is available now.</p>
                                <!-- <div class="checkout__input__checkbox">
                                    <label for="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment">
                                        <span class="checkmark"></span>
                                    </label>
                                </div> -->
                                <div class="checkout__input__checkbox">
                                    <label for="paypal">
                                        Cash On Delivery
                                        <input type="checkbox" id="paypal" v-model="inputs.cash_on_delivery">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <button type="submit" class="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
</template>

<script>

import ProductService from '@/services/ProductService.js'
import { mapGetters } from 'vuex'
// import _ from 'lodash' 

export default {
    data() {
        return {
        inputs : this.createFreshObj(),
        }
    },
    methods: {
        createFreshObj() {
          return {
              name : '',
              address : '',
              apartment : '',
              township : '',
              phone : '',
              email : '',
              create_account : false,
              account_pw : '',
              notes : '',
              cash_on_delivery : true,
          }
      },
      submit() {

          const products = []
          this.items.forEach(function(item) {
              const product = {
                  id : item.product.id,
                  quantity : item.quantity
              }

              products.push(product)
          })

          ProductService.checkOut(this.inputs, products).then(response => {

                if (response.status == 200) {
                    this.$store.dispatch('clearCart').then(() => {
                        this.$router.push({ name: 'Complete', params: { userId: '123' } })
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        ...mapGetters({
            items: 'cartItems'
        }),
        totalPrice: function () {
            return this.items.reduce((a, item) => +a + +item.perItemPrice, 0).toFixed(2)
        },
        isEmpty: function() {
            return this.items.length === 0 ? true : false
        }
        
    },
}
</script>

<style scoped>
    #note {
        color: red;
    }
</style>