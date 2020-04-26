<template>
    <div v-if="initialzed">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h1>{{ product.product_name }}</h1>
                    <h5>KS : {{ product.price }}</h5>
                    <br>
                    <button class="btn btn-success" @click="addToCard">Add to Cart</button>
                </div>
                <div class="col-6">
                    <img :src="product.product_image" :alt="product.product_name">
                </div>
                <div class="col-6">
                    <h4>Description</h4>
                    <p>
                        {{ product.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '@/store/index.js'

export default {
    data() {
        return {
            product: Object,
            initialzed: false
        }
    },
    props: ['id'],
    created() {
        ProductService.getProduct(this.id)
        .then(response => {
            this.product = response.data;
        })
        .then(() => {
            this.initialzed = true
        })
        .catch(err => {
            console.log(err);
        })
    },
    methods: {
        addToCard() {
            store.dispatch('addToCard', this.id)
        }
    },
}
</script>

<style scoped>
    img {
        width: 300px;
        height: 300px;
    }
    a:hover {
        text-decoration: none;
    }
</style>