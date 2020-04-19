import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, productId) {

      const newProduct = state.cart.find( (product) => product.id === productId )
      if (newProduct) {
        console.log("old item existed")
        newProduct.quantity++
      }
      else {
        console.log("new")
        const newItem = {
            id: productId,
            quantity: 1
          }

        state.cart.push(newItem)
      }
    }
  },
  actions: {
    addToCard({commit}, id) {
    commit('ADD_TO_CART', id)
    }
  },
  getters: {
    cartCount: state => {
      let initialValue = 0
      return state.cart.reduce(
          (count, item) => count + item.quantity
          , initialValue
      )
    },
    cartItems: state => {
      return state.cart
    }
  },
  modules: {}
});
