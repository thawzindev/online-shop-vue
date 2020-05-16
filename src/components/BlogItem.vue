<template>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="blog__item">
                <div class="blog__item__pic">
                    <img :src="blog.image" alt="" class="blogImage">
                </div>
            <div class="blog__item__text">
                <ul>
                    <li><i class="fa fa-calendar-o"></i> {{ moment(blog.created_at) }}</li>
                    <li><i class="fa fa-comment-o"></i> 5</li>
                </ul>
                <h5><a href="#">{{ blog.title }}</a></h5>
                <p>{{ str_limit(blog.body) }}</p>
                <router-link class="blog__btn" :to="{ name: 'BlogDetail', params: { id: blog.id }}">READ MORE <span class="arrow_right"></span></router-link>
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
            return string.slice(0,70)+' ...'
        }
    },
}
</script>

<style scoped>

    .blogImage {
        height: 160px;
    }

</style>