<template>
    <div>
        <section class="blog-details-hero set-bg" data-setbg="../assets/img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog__details__hero__text">
                        <h2>{{ blog.title }}</h2>
                            <ul>
                                <li>By Michael Scofield</li>
                                <li>{{ moment(blog.created_at) }}</li>
                                <li>8 Comments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- hero saction ended -->

        <section class="blog-details spad">
        <div class="container">
            <div class="row">
                <!-- <div class="col-lg-4 col-md-5 order-md-1 order-2">
                    <div class="blog__sidebar">
                        <div class="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div class="blog__sidebar__recent">
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-1.jpg" alt="">
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>09 Kinds Of Vegetables<br> Protect The Liver</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-2.jpg" alt="">
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>Tips You To Balance<br> Nutrition Meal Day</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="#" class="blog__sidebar__recent__item">
                                    <div class="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-3.jpg" alt="">
                                    </div>
                                    <div class="blog__sidebar__recent__item__text">
                                        <h6>4 Principles Help You Lose <br>Weight With Vegetables</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-12 col-md-7 order-md-1 order-1">
                    <div class="blog__details__text">
                        <img :src="blog.image" alt="">
                        <p>{{ blog.body }}</p>
                    </div>
                            <div class="blog__details__content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="blog__details__author">
                                            <div class="blog__details__author__pic">
                                                <img src="img/blog/details/details-author.jpg" alt="">
                                            </div>
                                            <div class="blog__details__author__text">
                                                <h6>Michael Scofield</h6>
                                                <span>Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="blog__details__widget">
                                            <ul>
                                                <li><span>Categories:</span> Food</li>
                                                <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                                            </ul>
                                            <div class="blog__details__social">
                                                <a href="#"><i class="fa fa-facebook"></i></a>
                                                <a href="#"><i class="fa fa-twitter"></i></a>
                                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                                <a href="#"><i class="fa fa-envelope"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <section class="related-blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title related-blog-title">
                        <h2>Post You May Like</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6" v-for="sugBlog in suggestBlog" :key="sugBlog.id">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                            <img :src="sugBlog.image" alt="">
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i>&nbsp;{{ moment(sugBlog.created_at) }}</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><router-link :to="{ name: 'BlogDetail', params: { id: sugBlog.id }}">{{ sugBlog.title }} <span class="arrow_right"></span></router-link>
                            </h5>
                            <p>{{ str_limit(sugBlog.body) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
</template>

<script>
import ProductService from '@/services/ProductService.js'
import moment from 'moment'  

export default {
    props: ['id'],
    data() {
        return {
            blog : Object,
            initialized : false,
            suggestBlog : []
        }
    },
    methods: {
        getBlogById() {
            ProductService.getBlogById(this.id)
            .then(response => {
                this.blog = response.data;
            })
            .catch(err => {
                console.log("err" + err);
            })
        },
        getSuggestBlog() {
            ProductService.getSuggestBlog()
            .then(response => {
                this.suggestBlog = response.data.data
            })
            .then(() => {
                this.initialized = true
            })
            .catch(err => {
                console.log("err" + err);
            })
        },
        moment(date) {
            return moment(date).format('MMMM D,YYYY');
        },
        str_limit(string) {
            return string.slice(0,120)+'...'
        }
    },
    watch: {
        '$route.path': function(val, oldVal){
            console.log(val, oldVal)
            this.getBlogById();
        }
    },
    created() {
        this.getBlogById()
        this.getSuggestBlog()
    },
}
</script>

<style scoped>
    .blog-details-hero  {
        background-image: url('../assets/img/breadcrumb.jpg');
    }

    img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    }
</style>