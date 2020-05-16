<template>
    <div>
        <BreadCrumb/>
        <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <div class="sidebar">
                        <div class="sidebar__item" v-if="categoryInitialized">
                            <h4>Category</h4>
                            <ul>
                                <li><a href="#" @click.prevent="getAll" :class="{ activeCate: categoryId == 0}">All</a></li>
                                <li v-for="category in categories" :key="category.id">
                                    <a href="#" @click.prevent="getProductByCategory(category.id)" :class="{ activeCate: category.id === categoryId}">{{ category.name_en }}</a>
                                </li>
                            </ul>
                        </div>

                        <div class="sidebar__item" v-if="!categoryInitialized">
                              <content-loader
                                width="250"
                                height="250">
                                <rect x="22" y="49" rx="0" ry="0" width="198" height="20" /> 
                                <rect x="26" y="90" rx="0" ry="0" width="165" height="10" /> 
                                <rect x="27" y="121" rx="0" ry="0" width="165" height="9" /> 
                                <rect x="27" y="150" rx="0" ry="0" width="165" height="8" /> 
                                <rect x="28" y="176" rx="0" ry="0" width="165" height="9" /> 
                                <rect x="25" y="206" rx="0" ry="0" width="165" height="10" /> 
                                <rect x="25" y="235" rx="0" ry="0" width="165" height="9" />
                            </content-loader>
                        </div>
                        <!-- <div class="sidebar__item">
                            <h4>Price</h4>
                            <div class="price-range-wrap">
                                <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="10" data-max="540">
                                    <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span>
                                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
                                <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div></div>
                                <div class="range-slider">
                                    <div class="price-input">
                                        <input type="text" id="minamount">
                                        <input type="text" id="maxamount">
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="sidebar__item sidebar__item__color--option">
                            <h4>Colors</h4>
                            <div class="sidebar__item__color sidebar__item__color--white">
                                <label for="white">
                                    White
                                    <input type="radio" id="white">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--gray">
                                <label for="gray">
                                    Gray
                                    <input type="radio" id="gray">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--red">
                                <label for="red">
                                    Red
                                    <input type="radio" id="red">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--black">
                                <label for="black">
                                    Black
                                    <input type="radio" id="black">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--blue">
                                <label for="blue">
                                    Blue
                                    <input type="radio" id="blue">
                                </label>
                            </div>
                            <div class="sidebar__item__color sidebar__item__color--green">
                                <label for="green">
                                    Green
                                    <input type="radio" id="green">
                                </label>
                            </div>
                        </div>
                        <div class="sidebar__item">
                            <h4>Popular Size</h4>
                            <div class="sidebar__item__size">
                                <label for="large">
                                    Large
                                    <input type="radio" id="large">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="medium">
                                    Medium
                                    <input type="radio" id="medium">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="small">
                                    Small
                                    <input type="radio" id="small">
                                </label>
                            </div>
                            <div class="sidebar__item__size">
                                <label for="tiny">
                                    Tiny
                                    <input type="radio" id="tiny">
                                </label>
                            </div>
                        </div>
                        <div class="sidebar__item">
                            <!-- <div class="latest-product__text">
                                <h4>Latest Products</h4>
                                <div class="latest-product__slider owl-carousel owl-loaded owl-drag">
                                    
                                    
                                <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-525px, 0px, 0px); transition: all 1.2s ease 0s; width: 1575px;"><div class="owl-item cloned" style="width: 262.5px;"><div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div class="owl-item cloned" style="width: 262.5px;"><div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div class="owl-item active" style="width: 262.5px;"><div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div class="owl-item" style="width: 262.5px;"><div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div class="owl-item cloned" style="width: 262.5px;"><div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div><div class="owl-item cloned" style="width: 262.5px;"><div class="latest-prdouct__slider__item">
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-2.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" class="latest-product__item">
                                            <div class="latest-product__item__pic">
                                                <img src="img/latest-product/lp-3.jpg" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span class="fa fa-angle-left"><span></span></span></button><button type="button" role="presentation" class="owl-next"><span class="fa fa-angle-right"><span></span></span></button></div><div class="owl-dots disabled"></div></div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-7">
                    <!-- <div class="product__discount">
                        <div class="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                        <div class="row">
                            
                        </div>
                    </div> -->
                    

                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div class="filter__item">
                        <div class="row">

                            <div class="col-lg-6 col-md-5">
                                <div class="filter__sort">
                                    <span>Sort By</span>&nbsp;
                                    <select name="sort_by" @change="sortBy">
                                        <option value="all">All</option>
                                        <option value="price">Price</option>
                                        <option value="popularity">Porpularity</option>
                                    </select>
                                    <!-- <div class="nice-select" tabindex="0"><span class="current">Default</span><ul class="list"><li data-value="0" class="option">Default</li><li data-value="0" class="option selected focus">Default</li></ul></div> -->
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <div class="filter__found">
                                    <h6><span>{{this.meta_data.total}}</span> Products found</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="!initialized" height=500>
                        <!-- content loader started -->
                        <div class="col-12">
                        <ContentLoader height="575" width="800">
                        <rect x="55" y="19" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="106" y="47" rx="0" ry="0" width="1" height="0" /> 
                        <rect x="566" y="17" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="301" y="19" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="71" y="160" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="92" y="177" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="320" y="160" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="341" y="176" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="584" y="160" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="607" y="175" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="52" y="205" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="85" y="361" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="306" y="202" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="320" y="341" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="342" y="357" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="566" y="204" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="582" y="344" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="605" y="358" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="49" y="390" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="62" y="529" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="65" y="347" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="83" y="544" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="307" y="390" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="322" y="527" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="345" y="541" rx="4" ry="4" width="63" height="9" /> 
                        <rect x="566" y="391" rx="4" ry="4" width="139" height="132" /> 
                        <rect x="581" y="527" rx="4" ry="4" width="108" height="10" /> 
                        <rect x="604" y="540" rx="4" ry="4" width="63" height="9" />
                    </ContentLoader>
                    </div>
                        <!-- content loader ended -->
                    </div>
                    <div class="row" v-if="initialized">

                    <Item v-for="(product,key) in products" :key="key" :product="product"/>
                       
                    </div>
                    <div class="product__pagination" v-if="initialized">
                        <a href="#" v-for="page in meta_data.last_page" 
                            :key="page" :class="{ 'active':meta_data.current_page === page }"
                            @click.prevent="callPage(page)">
                            {{ page }}
                        </a>
                        <!-- <a href="#" :class="{ 'disabled': meta_data.current_page === meta_data.last_page }" @click.prevent="callPage(meta_data.last_age)">
                            <i class="fa fa-long-arrow-right"></i>
                        </a> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import ProductService from '@/services/ProductService.js'
import { ContentLoader  } from 'vue-content-loader'
import _ from 'lodash'

export default {
    components: {
        Item,
        BreadCrumb,
        ContentLoader
    },
    data() {
        return {
            products: [],
            categories: [],
            page: 1,
            categoryId: 0,
            limit: 0,
            meta_data: Object,
            initialized: false,
            categoryInitialized: false,
            categorySearch : false,
            is_active: false,
        }
    },
    methods: {
        callPage(page=1) {
            if (!this.categorySearch) {
                ProductService.getProducts(page)
                .then(response => { 
                    console.log(response)
                    this.meta_data = response.data.meta
                    this.products = response.data.data
                })
                .then(() => {
                    this.initialized = true
                })
                .catch(err => {
                    console.log(err);
                })
            } else  {
                console.log(page)
                ProductService.getProductsByCategory(page, this.categoryId)
                .then(response => { 
                    console.log(response)
                    this.meta_data = response.data.meta
                    this.products = response.data.data
                })
                .then(() => {
                    this.initialized = true
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        getProductsByCategory(categoryId) {
            console.log('called' + categoryId)
            ProductService.getProductsByCategory(1, categoryId)
            .then(response => { 
               this.products = response.data.data
               this.meta_data = response.data.meta
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
            .then(() => {
                this.categoryInitialized = true
            })
            .catch(err => {
                console.log(err)
            })
        },
        getProductByCategory(id) {
            this.categoryId = id
            this.categorySearch = true
            this.getProductsByCategory(id)
        },
        getAll() {
            this.categoryId = 0
            this.categorySearch = false
            this.callPage()
        },
        sortBy(event) {
            if (event.target.value == 'all') {
                this.products = _.orderBy(this.products, ['id'], ['desc'])
            }
            else if (event.target.value == 'price') {
                this.products = _.orderBy(this.products, ['price'], ['desc']);
            }
        }
    },
    created() {
        this.getCategories()
        this.callPage()
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
