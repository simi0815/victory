import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile:false,
  },
  mutations: {
    SET_IS_MOBILE(state,val){
      state.isMobile = val
    }
  },
  actions: {
  },
  modules: {
  }
})
