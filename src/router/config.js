export const _import = path => () =>
  import ('@/views/' + path)

const routes = [{
  path: '/',
  redirect: '/article'
}, {
  meta: {
    isNav: true
  },
  name: 'Home',
  path: '/article',
  component: _import('Article/ArticleList')
}, {
  name: 'ArticleDetail',
  path: '/article/:id',
  props: true,
  component: _import('Article/ArticleDetail')
}, {
  meta: {
    isNav: true
  },
  name: 'About',
  path: '/about',
  component: _import('About')
}]

export default routes
