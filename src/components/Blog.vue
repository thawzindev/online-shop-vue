<template>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="blog__item">
            <div class="blog__item__pic">
                <img :src="blog.image" alt="">
            </div>
            <div class="blog__item__text">
                <ul>
                    <li><i class="fa fa-calendar-o"></i>{{ moment(blog.created_at) }}</li>
                    <li><i class="fa fa-comment-o"></i> 5</li>
                </ul>
                <h5><a href="#">{{ blog.title }}</a></h5>
                <p>{{ str_limit(blog.body) }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment'  

export default {
    props: {
        blog: Object
    },
    methods: {
        moment(date) {
            return moment(date).format('MMMM D,YYYY');
        },
        str_limit(string) {
            return string.slice(0,120)+'...'
        }
    },
}
</script>