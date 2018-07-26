const context = require.context('../../static/docs', true, /\.mdjs$/)

export const articleList = context.keys().map(path => {
  const mdjs = require('../../static/docs/' + path.slice(2))
  return {
    ...mdjs.info,
    content: mdjs.content.trim()
  }
}).sort((a, b) => new Date(b.date) - new Date(a.date))
