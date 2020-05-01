<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <p>
                <Category v-for="(category,index) in categories" :key="index" :category="category"/>
            </p>
        </div>

        <Item v-for="(product,index) in products" :key="index" :product="product"/> 
    </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import Category from '@/components/Category.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductService from '@/services/ProductService.js'

export default {
    components: {
        Item,
        Category
    },
    data() {
        return {
            products: [],
            categories: [],
            page: 1,
            count: Number,
            limit: 0,
        }
    },
    props: ['id'],
    methods: {
        callItems(page=1) {
            ProductService.getProductsByCategory(page, this.id)
            .then(response => { 
                if (this.products.length == 0) {
                    this.products = response.data.data;
                } else {
                    if (response.data.data.length == 0) {
                        this.limit = 1
                        console.log('ended')
                    }
                    this.products.push(...response.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        getCategories() {
            ProductService.getCategories()
            .then(response => {
                this.categories = response.data.data
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.getCategories()
        this.callItems()
    },
    watch: {
        '$route.path': function(val, oldVal){
            console.log(val, oldVal)
            this.products = []
            this.callItems();
        }
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

<style scoped>
    a {
        margin-right:  10px;
    }

    .active {
        color: red;
    }
</style>