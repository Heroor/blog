import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout.vue'
import routes from './config'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: routes
  }, {
    path: '*',
    nam: '404',
    component: {
      template: '<div>404</div>'
    }
  }]
})
