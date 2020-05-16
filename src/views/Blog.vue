<template>
    <div>
        <section class="blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-5">
                    <div class="blog__sidebar">
                        <div class="blog__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search...">
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#">All</a></li>
                                <li><a href="#">Beauty (20)</a></li>
                                <li><a href="#">Food (5)</a></li>
                                <li><a href="#">Life Style (9)</a></li>
                                <li><a href="#">Travel (10)</a></li>
                            </ul>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div class="blog__sidebar__recent">
                                <!-- recent blogs start -->
                                <RecentBlog/>
                                <!-- end of recent blog -->
                            </div>
                        </div>
                        <div class="blog__sidebar__item">
                            <h4>Search By</h4>
                            <div class="blog__sidebar__item__tags">
                                <a href="#">Apple</a>
                                <a href="#">Beauty</a>
                                <a href="#">Vegetables</a>
                                <a href="#">Fruit</a>
                                <a href="#">Healthy Food</a>
                                <a href="#">Lifestyle</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7">

                    <div class="row" v-if="!initialized">
                        <div class="col-12">
                            <content-loader
                            width="780"
                            height="700"
                        >
                             <rect x="43" y="4" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="44" y="112" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="44" y="128" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="45" y="175" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="44" y="143" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="44" y="158" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="43" y="234" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="44" y="342" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="44" y="358" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="45" y="405" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="44" y="373" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="44" y="388" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="300" y="6" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="301" y="113" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="301" y="129" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="302" y="176" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="301" y="144" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="301" y="159" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="564" y="7" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="565" y="114" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="565" y="130" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="566" y="177" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="565" y="145" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="565" y="160" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="302" y="235" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="303" y="343" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="303" y="359" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="304" y="406" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="303" y="374" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="303" y="389" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="565" y="235" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="566" y="343" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="566" y="359" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="567" y="406" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="566" y="374" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="566" y="389" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="41" y="477" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="42" y="585" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="42" y="601" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="43" y="648" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="42" y="616" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="42" y="631" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="299" y="477" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="301" y="586" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="301" y="602" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="302" y="649" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="301" y="617" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="301" y="632" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="563" y="478" rx="0" ry="0" width="157" height="101" /> 
                            <rect x="564" y="586" rx="0" ry="0" width="130" height="11" /> 
                            <rect x="564" y="602" rx="0" ry="0" width="101" height="10" /> 
                            <rect x="565" y="649" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="564" y="617" rx="0" ry="0" width="154" height="10" /> 
                            <rect x="564" y="632" rx="0" ry="0" width="154" height="10" />
                        </content-loader>
                        </div>
                    </div>

                    <div class="row" v-if="initialized">
                        <!-- Blog Items -->
                        <BlogItem v-for="(blog,key) in blogs" :key="key" :blog="blog"/>
                        <!-- End Blog Items -->
                        <div class="col-lg-12">
                            <div class="product__pagination blog__pagination">
                                <a href="#" v-for="page in meta_data.last_page" 
                                    :key="page" :class="{ 'active':meta_data.current_page === page }"
                                    @click.prevent="getBlog(page)">
                                    {{ page }}
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    </div>
</template>


<script>
import BlogItem from '@/components/BlogItem.vue'
import RecentBlog from '@/components/RecentBlog.vue'
import ProductService from '@/services/ProductService.js'
import { ContentLoader  } from 'vue-content-loader'

export default {
    components: {
        BlogItem,
        RecentBlog,
        ContentLoader
    },
    data() {
        return {
            blogs: [],
            meta_data: Object,
            initialized: false,
        }
    },
    methods: {
        getBlog(page=1) {
            ProductService.getBlog(page)
            .then(response => { 
               this.blogs = response.data.data
               this.meta_data = response.data.meta
            })
            .then(() => {
                window.scrollTo({top: 0, behavior: 'smooth'})
            })
            .then(() => {
                this.initialized = true
            })
            .catch(err => {
                console.log(err);
            })
        },
    },
    created() {
        this.getBlog()
    },
}
</script>

<style scoped>
    a.active {
        color: #ffffff;
        text-decoration: none;
        outline: none;
        background-color: #7fad39;
    }
    a:hover {
        color: green;
    }
    .activeCate {
        color:#7fad39;
    }
</style>