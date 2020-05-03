<template>
  <div>
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import '@/assets/css/style.css'

export default {
    components: {
        NavBar,
        Footer,

    },
    data() {
        return {
           
        }
    },
    created() {
    
    }
}
</script>

<style>

</style>
