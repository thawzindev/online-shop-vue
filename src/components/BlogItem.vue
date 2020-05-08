<template>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="blog__item">
                <div class="blog__item__pic">
                    <img src="../assets/img/blog/blog-2.jpg" alt="">
                </div>
            <div class="blog__item__text">
                <ul>
                    <li><i class="fa fa-calendar-o"></i> {{ blog.created_at }}</li>
                    <li><i class="fa fa-comment-o"></i> 5</li>
                </ul>
                <h5><a href="#">{{ blog.title }}</a></h5>
                <p>{{ blog.body }}</p>
                <a href="#" class="blog__btn">READ MORE <span class="arrow_right"></span></a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        blog: Object
    },
}
</script>
