import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bannerInfo: {
      hideBanner: false,
      bannerUrl: 'http://cdn.benjavan.top/banner.jpg',
      bannerTitle: '',
      bannerDesc: ''
    },
    loadingProgress: 0,
    loadingError: false,
    showSideBar: false,
    showSideNav: false,
  },
  mutations: {
    [types.SET_LOADING_PROGRESS] (state, val) {
      state.loadingProgress = val
    },
    [types.SET_LOADING_ERROR] (state, val) {
      state.loadingError = val
    },
    [types.SWITCH_SIDE_BAR]: genSwitchStatusFn('showSideBar'),
    [types.SWITCH_SIDE_NAV]: genSwitchStatusFn('showSideNav'),
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

function genSwitchStatusFn (stateKey) {
  return function switchStatus (state, isShow) {
    if (typeof isShow === 'boolean') {
      state[stateKey] = isShow
    } else {
      state[stateKey] = !state[stateKey]
    }
  }
}
