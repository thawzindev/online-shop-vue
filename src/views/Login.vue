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
        <h4>Login</h4>
        <form action="#" @submit.prevent="submit">
            <div class="row">
                <div class="col-lg-7 col-md-6">
                    <div class="row">

                    <div class="col-lg-12">
                        <div class="checkout__input">
                            <p>Phone<span>*</span></p>
                            <input type="text" placeholder="Name" v-model="inputs.phone" :class="{ error : $v.inputs.phone.$error }" @blur="$v.inputs.phone.$touch()">
                        </div>

                        <div v-if="$v.inputs.phone.$error">
                            <p v-if="!$v.inputs.phone.required" class="errorMessage">phone is required.</p>
                        </div>
                    </div>

                    </div>

                    <div class="checkout__input">
                        <p>Password<span>*</span></p>
                        <input type="password" v-model="inputs.password" :class="{ error : $v.inputs.password.$error }" @blur="$v.inputs.password.$touch()">

                        <div v-if="$v.inputs.password.$error">
                            <p v-if="!$v.inputs.password.required" class="errorMessage">password is required.</p>
                            <p v-if="!$v.inputs.password.minLength" class="errorMessage">Minimum password length is 6.</p>
                        </div>
                    </div>
   
                </div>
                    </div>

                     <button type="submit" class="site-btn">PLACE ORDER</button>
                </form>
            </div>
        </div>
    </section>
    </div>
</template>

<script>

// import ProductService from '@/services/ProductService.js'
import { mapGetters } from 'vuex'
import { required, minLength  } from 'vuelidate/lib/validators'
// import bcrypt from 'bcrypt'

// import _ from 'lodash' 

export default {
    data() {
        return {
        inputs : this.createFreshObj(),
        }
    },
    validations() {
        return {
            inputs : {
                phone : { required },
                password : { required, minLength: minLength(6) },
            }
        }
    },
    methods: {
        createFreshObj() {
          return {
              phone : '',
              password : '',
          }
      },
      submit() {

        this.$v.$touch()

        if (this.$v.$invalid) {
              alert("ERR")
        } 
        else {
            // bcrypt.hash(this.inputs.password, 10, function(err, hash) {
            //     if (err) {
            //         console.log(err)
            //     } else {
            //         console.log(hash)
            //     }
            // });
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