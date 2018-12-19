import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout.vue'
import routes from './config'
import Store from '@/store'
import {_import} from './config'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: routes
  }, {
    path: '*',
    name: '404',
    component: _import('404')
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  Store.dispatch('beginLoading')
  next()
})

export default router
