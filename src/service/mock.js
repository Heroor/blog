const context = require.context('@/docs', true, /\.mdjs$/)

export const fileList = context.keys()

export const articleList = fileList.map(path => {
  const mdjs = require('@/docs/' + path.slice(2))
  return {
    ...mdjs.info,
    content: mdjs.content
  }
}).sort((a, b) => a.date < b.date)
