<template>
  <div>
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header__top__left">
                            <ul>
                                <li><i class="fa fa-envelope"></i>hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                            <div class="header__top__right__language">
                                <img src="../assets/img/language.png" alt="">
                                <div>English</div>
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__social" v-if="isLoggedIn">
                                <span>{{ user.name }}</span> 
                            </div>
                            <div class="header__top__right__auth">
                                <router-link :to="{ name: 'login'}" v-if="!isLoggedIn"><i class="fa fa-user"></i> Log In </router-link>
                                <a v-if="isLoggedIn" href="#" @click.prevent="logOut">Log Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <router-link :to="{ name: 'Home' }"><img src="../assets/img/logo.png" alt=""></router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>    
                            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
                            <li><router-link :to="{ name: 'Shop' }">Shop</router-link></li>
                            <!-- <li><a href="#">Pages</a>
                                <ul class="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> -->
                            <li><router-link :to="{ name: 'Blog' }">Blog</router-link></li>
                            <li><router-link :to="{ name: 'contact-us'}">Contact</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a href="#" @click.prevent="goToWishList"><i class="fa fa-heart"></i> <span>{{ wishList }}</span></a></li>

                            <li><router-link :to="{ name: 'Cart' }"><i class="fa fa-shopping-bag"></i><span>{{ cartCount }}</span></router-link></li>
                        </ul>
                        <!-- <div class="header__cart__price">item: <span>$150.00</span></div> -->
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
// import ProductService from '@/services/ProductService.js'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        openToast(text){
            this.$toasted.error(text, { 
                icon : 'cart-plus',
                theme: "bubble", 
                position: "top-right", 
                duration : 3000,
            });
        },
        logOut() {
            this.$store.commit('logout')
        },
        goToWishList() {
            if (this.isLoggedIn) {
               this.$router.push({ name: 'wishList', params: { userId: '123' } })
            } else {
                this.openToast('Need to login !')
            }
        }
    },
    computed: {
        cartCount() {   
            return this.$store.getters.cartCount
        },
        authUser() {
            return this.$store.state.user
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        },
        user() {
            const user = JSON.parse(localStorage.getItem('user'))
            return user
        },
        wishList() {
            return this.$store.getters.wishlist
        }
    },
}

</script>

<style scoped>
    a.router-link-exact-active.router-link-active {
    color:#7fad39;
}
</style>