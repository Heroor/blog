const context = require.context('@/docs', true, /\.mdjs$/)

export const articleList = context.keys().map(path => {
  const mdjs = require('@/docs/' + path.slice(2))
  return {
    ...mdjs.info,
    content: mdjs.content
  }
}).sort((a, b) => a.date < b.date)
