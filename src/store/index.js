import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bannerInfo: {
      hideBanner: false,
      bannerUrl: 'http://oueon55l6.bkt.clouddn.com/banner.jpg',
      bannerTitle: '',
      bannerDesc: ''
    }
  },
  mutations: {
  }
})
