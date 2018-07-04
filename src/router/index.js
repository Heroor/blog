import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/views/MainContainer.vue'
import Layout from '@/views/Layout.vue'

const _import = path => () => import('@/views/' + path)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      redirect: '/article',
      alias: '/article',
      component: MainContainer,
      children: [{
        path: '/article',
        name: 'ArticleList',
        component: _import('Article/ArticleList')
      }, {
        path: '/article/:id',
        name: 'article-detail',
        component: _import('Article/ArticleDetail')
      }]
    }, {
      path: '/info',
      component: MainContainer,
      children: [{
        path: '/',
        name: 'infoPage',
        component: _import('Info')
      }]
    }]
  }, {
    path: '*',
    nam: '404',
    component: {
      template: '<div>404</div>'
    }
  }]
})
