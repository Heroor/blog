import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    // 主视口 呈现导航
    path: '/',
    component:  _ => import('@/views'),
    children: [{
      // home页 呈现头图、文章列表、详情页
      path: '/',
      component: _ => import('@/views/articles'),
      children: [
        {
          // 文章列表
          name: 'list',
          path: '/',
          component: _ => import('@/components/article')
        },
        // 文章
        {
          name: 'article',
          path: '/article-*',
          component: _ => import('@/views/articles/2017-9-22-15-31.vue')
        }
      ]
    }]
  }]
})
