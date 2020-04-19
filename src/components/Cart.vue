<template>
    <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <h4>Your Cart</h4>
                <button type="button" class="close" @click="closeCart">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- <h1>{{items}}</h1> -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Products</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in items" :key="index">
                          <td>{{ index+1 }}</td>
                          <td>{{ item.productName }}</td>
                          <td>{{ item.quantity }}</td>
                          <td>{{ item.perProductPrice }} </td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td id="totalPrice">{{ totalPrice }}</td>
                        </tr>
                    </tbody>
                    </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductService from '@/services/ProductService.js'

export default {
    data() {
      return {
          items: [],
          totalPrice : 1000,
          initialValue : 0,
      }
    },
    methods: {
      closeCart() {
        this.$emit('closeCart', false)
      }
    },
    created() {
      this.$store.getters.cartItems.map(
        item => ProductService.getProduct(item.id)
        .then(response => {
            response.data.quantity = item.quantity
            response.data.perProductPrice = Math.round(item.quantity * response.data.productPrice).toFixed(3)
            this.items.push(response.data);
        })
        .then(() => {
          this.totalPrice = this.items.reduce((a, item) => +a + +item.perProductPrice, 0).toFixed(3)
        })
        .catch(err => {
            console.log(err);
        })
      )
    },
}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    #totalPrice {
      font-style: italic;
      font-weight: bold;
    }

</style>