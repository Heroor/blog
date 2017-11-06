import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    // 主视口 呈现导航
    path: '/',
    component:  () => import('@/views'),
    children: [{
      // home页 呈现头图、文章列表、详情页
      path: '/',
      component: () => import('@/views/articles'),
      children: [
        {
          // 文章列表
          name: 'list',
          path: '/',
          component: () => import('@/components/article')
        },
        // 文章
        {
          name: 'article',
          path: '/article-*',
          component: () => import('@/views/articles/article-details.vue')
        }
      ]
    }]
  },{
    path: '*',
    name: '404',
    component: {
      template: '<p>404</p>'
    }
  }]
})
