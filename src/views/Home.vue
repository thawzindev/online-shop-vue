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
            page: 1,
            count: Number,
            limit: 0
        }
    },
    methods: {
        callItems(page=1) {
            ProductService.getProducts(page)
            .then(response => {
                if (this.products.length == 0) {
                    this.products = response.data;
                } else {
                    if (response.data.length == 0) {
                        this.limit = 1
                        console.log('ended')
                    }
                    this.products.push(...response.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created() {
        this.callItems()
    },
    mounted() {
        window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow  && this.limit != 1) {
            this.page++
            this.callItems(this.page)
            console.log('called'+ this.page )
        }
        };
 
    },
}
</script>