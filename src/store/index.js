import Vue from "vue"
import Vuex from "vuex"
import ProductService from '@/services/ProductService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {

      const checkProduct = state.cart.find( (product) => product.product.id === payload.product.id )
    
      if (checkProduct) {
        console.log("old item existed")
        checkProduct.quantity+= payload.quantity
        checkProduct.perItemPrice = checkProduct.quantity * checkProduct.product.price
      }
      else {
        console.log("new")
        const newItem = {
            product: payload.product,
            quantity: payload.quantity,
            perItemPrice : payload.product.price * payload.quantity
          }
        state.cart.push(newItem)
      }
    },
    CLEAR_CART(state) {
      return state.cart = []
    },
    INCREASE_CART_ITEM(state, id) {
      const product = state.cart.find( (product) => product.product.id === id )
      console.log(product)
      product.quantity++
      product.perItemPrice = product.quantity * product.product.price
    },
    DECREASE_CART_ITEM(state, id) {
      const product = state.cart.find( (product) => product.product.id === id )
      if (product.quantity !== 0) {
        product.quantity--
        product.perItemPrice = product.quantity * product.product.price
      }
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
      ProductService.productCheck(id).then(response => {
        if (response.data.status) {
          commit('INCREASE_CART_ITEM', id)
        } else {
            throw new Error('Not enough item');
          }
      })
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
    }
  },
  modules: {}
});
