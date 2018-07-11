import MainContainer from '@/views/MainContainer.vue'

const _import = path => () => import ('@/views/' + path)

const routes = [{
  title: 'Home',
  path: '/',
  redirect: '/article',
  alias: '/article',
  component: MainContainer,
  children: [{
    name: 'article-list',
    path: '/article',
    component: _import('Article/ArticleList')
  }, {
    name: 'article-detail',
    path: '/article/:id',
    component: _import('Article/ArticleDetail')
  }]
}, {
  title: 'About',
  path: '/about',
  component: MainContainer,
  children: [{
    path: '/',
    name: 'about',
    component: _import('About')
  }]
}]

export default routes
