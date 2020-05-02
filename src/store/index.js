import Vue from "vue"
import Vuex from "vuex"
// import ProductService from '@/services/ProductService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const newProduct = state.cart.find( (product) => product.id === payload.id )
        if (newProduct) {
          console.log("old item existed")
          newProduct.quantity+= payload.quantity
        }
        else {
          console.log("new")
          const newItem = {
              id: payload.id,
              quantity: payload.quantity
            }
          state.cart.push(newItem)
        }
    },
    CLEAR_CART(state) {
      return state.cart = []
    },
    INCREASE_CART_ITEM(state, id) {
      const product = state.cart.find( (product) => product.id === id )
      product.quantity++
    },
    DECREASE_CART_ITEM(state, id) {
      const product = state.cart.find( (product) => product.id === id )
      product.quantity--
    }
  },
  actions: {
    addToCard: ({commit}, payload) => {
      commit('ADD_TO_CART',  payload )
    },
    clearCart({commit}) {
      commit('CLEAR_CART')
    },
    increaseItem({commit}, id) {
      commit('INCREASE_CART_ITEM', id)
    },
    decreaseItem({commit}, id) {
      commit('DECREASE_CART_ITEM', id)
    }
  },
  getters: {
    cartCount: state => {
      let initialValue = 0
      return state.cart.reduce(
          (count, item) => count + item.quantity
          , initialValue)
    },
    cartItems: state => {

      return state.cart

      // return state.cart.map( t => {
      //   return {
      //     ...t,
      //     itemDetail : ProductService.getProduct(t.id).then(response => {
      //       t = response.data.uuid
      //       response.data.perProductPrice = Math.round(t.quantity * response.data.price).toFixed(3)
      //     })
      //   }
      // })
 
      // return state.cart.map(
      //   item => ProductService.getProduct(item.id)
      //   .then(response => {
      //       response.data.quantity = item.quantity
      //       response.data.perProductPrice = Math.round(item.quantity * response.data.price).toFixed(3)
      //       items.push(response.data);
      //   })
      //   // .then(() => {
      //   // this.totalPrice = this.items.reduce((a, item) => +a + +item.perProductPrice, 0).toFixed(3)
      //   // })
      //   .catch(err => {
      //       console.log(err);
      //   })
      // )
      // return items;
    },
    
  },
  modules: {}
});
