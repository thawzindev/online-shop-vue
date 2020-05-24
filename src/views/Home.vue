<template>
    <div>
        <HeroSection/>
        <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <!-- <div class="featured__controls">
                        <ul>
                            <li class="active mixitup-control-active" data-filter="*">All</li>
                            <li data-filter=".oranges" class="">Oranges</li>
                            <li data-filter=".fresh-meat" class="">Fresh Meat</li>
                            <li data-filter=".vegetables" class="">Vegetables</li>
                            <li data-filter=".fastfood" class="">Fastfood</li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="row featured__filter" id="MixItUpAFF3CE" style="">
                    
            <FeatureProduct v-for="(product,key) in featureProds" :key="key" :product="product"/>

          </div>
        </div>
    </section>
            <Banner/>

        <section class="from-blog spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    
                    <Blog v-for="(blog,key) in featureBlogs" :key="key" :blog="blog"/>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
// import CategorySection from '@/components/CategorySection.vue'
import NProgress from 'nprogress'
import ProductService from '@/services/ProductService.js'
import FeatureProduct from '@/components/FeatureProduct.vue'
import Banner from '@/components/Banner.vue'
import Blog from '@/components/Blog.vue'
export default { 
    components: {
        HeroSection,
        // CategorySection,
        FeatureProduct,
        Banner,
        Blog
    },  
    data() {
        return {
            featureProds: [],
            featureBlogs: [],
            initialized : false,
        }
    },
    methods: {
        featureProducts() {
            ProductService.getFeatureProducts().then(response => {
                this.featureProds = response.data.data
            })
            .then(() => {
                    this.initialized = true
            })
            .catch(err => {
                console.log(err)
            })
        },  
        featureBlgs() {
            ProductService.getFeatureBlogs().then(response => {
                this.featureBlogs = response.data.data
            })
            .then(() => {
                    this.initialized = true
            })
            .catch(err => {
                NProgress.done()
                console.log(err)
            })
        }
    },
    created() {
        this.featureProducts()
        this.featureBlgs()
    },
}

</script>