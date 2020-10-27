import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile:false,
    live2DWord:''
  },
  mutations: {
    SET_IS_MOBILE(state,val){
      state.isMobile = val
    },
    setLiveWord(state,val){
      state.live2DWord = val
    }
  },
  actions: {

  },
  modules: {
  }
})
