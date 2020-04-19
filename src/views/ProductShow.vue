<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h1>{{ product.productName }}</h1>
                    <h5>KS : {{ product.productPrice }}</h5>
                    <br>
                    <button class="btn btn-success" @click="addToCard">Add to Cart</button>
                </div>
                <div class="col-6">
                    <img :src="product.productImage" :alt="product.productName">
                </div>
                <div class="col-6">
                    <h4>Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel animi vitae doloremque, asperiores non numquam voluptates molestiae doloribus. Quis quam ad vero, alias sint hic fugiat adipisci fuga ab?
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
            product: Object
        }
    },
    props: ['id'],
    created() {
        ProductService.getProduct(this.id)
        .then(response => {
            this.product = response.data;
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