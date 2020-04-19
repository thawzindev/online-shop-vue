<template>
<div class="container">
    <div class="row">
        <Item v-for="product in products" :key="product.id" :product="product"/>
    </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductService from '@/services/ProductService.js'

export default {
    components: {
        Item
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {
        
    },
    created() {
    ProductService.getProducts()
        .then(response => {
            this.products = response.data;
        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>