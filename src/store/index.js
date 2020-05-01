import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      console.log(payload.id)
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
    }
  },
  actions: {
    addToCard: ({commit}, payload) => {
      commit('ADD_TO_CART',  payload )
    },
    clearCart({commit}) {
      commit('CLEAR_CART')
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
