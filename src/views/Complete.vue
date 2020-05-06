<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center"><b>THANK YOU!</b></h1>
                    <hr>
                    <p class="text-center">Your Order has been placed successfully. We'll contact you as soon as posssible.</p>
                    <hr>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <router-link :to="{ name: 'Home' }" id="home">Back to Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['message'],
    created() {
        if (this.message != 'success') {
            this.$router.push({ name: 'error'})
        }
    },
}
</script>

<style scoped>
    h1 {
        color: mediumseagreen
    }
    p {
        font-size: 21px;
    }
    a:hover {
        color:green !important;
    }
    .container {
        margin-top: 80px;
        margin-bottom: 80px;
    }
</style>