import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bannerInfo: {
      hideBanner: false,
      bannerUrl: 'http://oueon55l6.bkt.clouddn.com/banner.jpg',
      bannerTitle: '',
      bannerDesc: ''
    },
    loadingProgress: 0,
    loadingError: false
  },
  mutations: {
    [types.SET_LOADING_PROGRESS] (state, val) {
      state.loadingProgress = val
    },
    [types.SET_LOADING_ERROR] (state, val) {
      state.loadingError = val
    }
  },
  actions: {
    beginLoading ({ commit, state }) {
      commit(types.SET_LOADING_PROGRESS, 10)
      for (var i = 0; i < 30; i++) {
        if (i > 20 && i < 29) {
          setTimeout(() => {
            commit(types.SET_LOADING_PROGRESS, state.loadingProgress + 5)
          }, 50 * i)
        } else {
          setTimeout(() => {
            commit(types.SET_LOADING_PROGRESS, state.loadingProgress + 1)
          }, 10 * i)
        }
      }
      setTimeout(() => {
        commit(types.SET_LOADING_PROGRESS, 100)
      }, 500)
    }
  }
})
