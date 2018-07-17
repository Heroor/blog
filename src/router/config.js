import MainContainer from '@/views/MainContainer.vue'

export const _import = path => () =>
  import ('@/views/' + path)

const routes = [{
  path: '/',
  redirect: '/article'
}, {
  isNav: true,
  name: 'Home',
  path: '/article',
  component: _import('Article/ArticleList')
}, {
  name: 'ArticleDetail',
  path: '/article/:id',
  component: _import('Article/ArticleDetail')
}, {
  isNav: true,
  name: 'About',
  path: '/about',
  component: _import('About')
}]

export default routes
