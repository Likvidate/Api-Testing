import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoType: 'default'
  },
  getters: {
    infoType: state => {
      return state.infoType
    }
  },
  mutations: {
    setType (state, value) {
      state.infoType = value
    }
  },
  actions: {
  },
  modules: {
  }
})
