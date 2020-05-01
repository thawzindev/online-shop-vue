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
                    <div class="featured__controls">
                        <ul>
                            <li class="active mixitup-control-active" data-filter="*">All</li>
                            <li data-filter=".oranges" class="">Oranges</li>
                            <li data-filter=".fresh-meat" class="">Fresh Meat</li>
                            <li data-filter=".vegetables" class="">Vegetables</li>
                            <li data-filter=".fastfood" class="">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row featured__filter" id="MixItUpAFF3CE" style="">
       
            <FeatureProduct/>
            <FeatureProduct/>
            <FeatureProduct/>
            <FeatureProduct/>
            <FeatureProduct/>
            <FeatureProduct/>
            <FeatureProduct/>
            <FeatureProduct/>
          </div>
        </div>
    </section>
        <Banner/>
        <Blog/>
    </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
// import CategorySection from '@/components/CategorySection.vue'
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
    // data() {
    //     return {
    //         products: [],
    //         categories: [],
    //         page: 1,
    //         count: Number,
    //         limit: 0,
    //     }
    // },
    // methods: {
    //     callItems(page=1) {
    //         ProductService.getProducts(page)
    //         .then(response => { 
    //             if (this.products.length == 0) {
    //                 this.products = response.data.data;
    //             } else {
    //                 if (response.data.data.length == 0) {
    //                     this.limit = 1
    //                     console.log('ended')
    //                 }
    //                 this.products.push(...response.data.data)
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     },
    //     getCategories() {
    //         ProductService.getCategories()
    //         .then(response => {
    //             this.categories = response.data.data
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // },
    // created() {
    //     this.getCategories()
    //     this.callItems()
    // },
    // mounted() {
    //     window.onscroll = () => {
    //     let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

    //     if (bottomOfWindow  && this.limit != 1) {
    //         this.page++
    //         this.callItems(this.page)
            
    //         console.log('called'+ this.page )
    //     }
    //     };
 
    // },
}

</script>