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

            <!-- <div class="col-lg-12" v-if="isEmpty">
                    <img src="https://www.redufy.com/img/png/empty-cart.png" class="mx-auto d-block" alt="">
            </div> -->

    <div class="checkout__form">
        <h4>Billing Details</h4>
        <form action="#" @submit.prevent="submit">
            <div class="row">
                <div class="col-lg-7 col-md-6">
                    <div class="row">

                    <div class="col-lg-12">
                        <div class="checkout__input">
                            <p>Name<span>*</span></p>
                            <input type="text" placeholder="Name" v-model="inputs.name" :class="{ error : $v.inputs.name.$error }" @blur="$v.inputs.name.$touch()">
                        </div>

                        <div v-if="$v.inputs.name.$error">
                            <p v-if="!$v.inputs.name.required" class="errorMessage">Name is required.</p>
                        </div>
                    </div>

                    </div>
                    <div class="checkout__input">
                        <p>Address<span>*</span></p>
                        <input type="text" placeholder="Street Address" class="checkout__input__add" v-model="inputs.address" :class="{ error : $v.inputs.address.$error }" @blur="$v.inputs.address.$touch()">

                        <div v-if="$v.inputs.address.$error">
                            <p v-if="!$v.inputs.address.required" class="errorMessage">address is required.</p>
                        </div>

                        <input type="text" placeholder="Aspartment, suite, unite ect (optinal)" v-model="inputs.apartment" :class="{ error : $v.inputs.apartment.$error }" @blur="$v.inputs.apartment.$touch()">

                        <div v-if="$v.inputs.apartment.$error">
                            <p v-if="!$v.inputs.apartment.required" class="errorMessage">Apartment is required.</p>
                        </div>
                        
                    </div>
                    <div class="checkout__input">
                        <p>Town/City<span>*</span></p>
                        <input type="text" v-model="inputs.township" :class="{ error : $v.inputs.township.$error }" @blur="$v.inputs.township.$touch()">

                        <div v-if="$v.inputs.township.$error">
                            <p v-if="!$v.inputs.township.required" class="errorMessage">Township is required.</p>
                        </div>
                    </div>
   
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="checkout__input">
                                <p>Phone<span>*</span></p>
                                <input type="text" v-model="inputs.phone" :class="{ error : $v.inputs.phone.$error }" @blur="$v.inputs.phone.$touch()">
                            </div>

                            <div v-if="$v.inputs.phone.$error">
                                <p v-if="!$v.inputs.phone.required" class="errorMessage">phone is required.</p>
                                <p v-if="!$v.inputs.phone.minLength || !$v.inputs.phone.maxLength" class="errorMessage">Enter valid phone no.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="checkout__input">
                                <p>Email<span>*</span></p>
                                <input type="email" v-model="inputs.email" :class="{ error : $v.inputs.email.$error }" @blur="$v.inputs.email.$touch()">
                            </div>

                            <div v-if="$v.inputs.email.$error">
                                <p v-if="!$v.inputs.email.required" class="errorMessage">email is required.</p>
                                <p v-if="!$v.inputs.email.email" class="errorMessage">Please enter valid email.</p>
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
                    <p>Create an account by entering the information below.</p>

                    <div class="checkout__input" v-if="inputs.create_account">
                        <p>Account Password<span>*</span></p>
                        <input type="password" v-model="inputs.account_pw" :class="{ error : $v.inputs.account_pw.$error }" @blur="$v.inputs.account_pw.$touch()">

                        <div v-if="$v.inputs.account_pw.$error">
                            <p v-if="!$v.inputs.account_pw.required" class="errorMessage">Please enter passsword.</p>
                            <p v-if="!$v.inputs.account_pw.minLength" class="errorMessage">Please enter passsword.</p>
                        </div>
                    </div>

                    <div class="checkout__input" v-if="inputs.create_account">
                        <p>Confirm Password<span>*</span></p>
                        <input type="password" v-model="inputs.confirm_password" :class="{ error : $v.inputs.confirm_password.$error }" @blur="$v.inputs.confirm_password.$touch()">

                        <div v-if="$v.inputs.confirm_password.$error">
                            <p v-if="!$v.inputs.confirm_password.sameAsPassword" class="errorMessage">Password must be same.</p>
                        </div>
                    </div>

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
                                <input type="checkbox" id="paypal" v-model="inputs.cash_on_delivery" :class="{ error : $v.inputs.cash_on_delivery.$error }" @blur="$v.inputs.cash_on_delivery.$touch()">
                                <span class="checkmark"></span>

                                <div v-if="$v.inputs.cash_on_delivery.$error">
                                    <p v-if="!$v.inputs.cash_on_delivery.required" class="errorMessage">cash_on_delivery is required.</p>
                                </div>

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
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

// import _ from 'lodash' 

export default {
    data() {
        return {
        inputs : this.createFreshObj(),
        }
    },
    validations() {
        if (this.inputs.create_account) {
        return {
            inputs : {
                name: { required },
                address : { required },
                apartment : { required },
                township : { required },
                phone : { required },
                email : { required, email },
                create_account : { required },
                account_pw : { required, minLength: minLength(6) },
                confirm_password : { sameAsPassword: sameAs('account_pw') },
                notes : { required },
                cash_on_delivery : { required },
            }
           
        }
        } 
        else {
        return {
            inputs : {
                name: { required },
                address : { required },
                apartment : { required },
                township : { required },
                phone : { required },
                email : { required },
                cash_on_delivery : { required },
            }
        }
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
              confirm_password : '',
              notes : '',
              cash_on_delivery : true,
          }
      },
      submit() {

        this.$v.$touch()

        if (this.$v.$invalid) {
              alert("ERR")
        } 
        else {
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
                            this.$router.push({ name: 'Complete', params: { message: 'success' } })
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            }
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
    .errorMessage {
        color: red;
    }
    .error {
        border: 1px solid red;
    }
</style>