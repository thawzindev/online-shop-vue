<template>
    <span>
        <router-link :to="{ name: 'getProductByCategory', params: { 'id' : category.id }}">
            {{ category.name_en }}
        </router-link>
    </span>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  props: {
    category: Object
  },
  data() {
      return {

      }
  },
  methods: {
    
  },
}

</script>

<style scoped>
    a {
        margin-right: 20px;
    }

</style>