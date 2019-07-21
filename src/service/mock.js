const context = require.context('@/docs', true, /\.mdjs$/)

export const fileList = context.keys()

export const articleList = fileList.map(path => {
  const mdjs = require('@/docs/' + path.slice(2))
  return {
    ...mdjs.info,
    content: mdjs.content,
    wordCount: mdjs.wordCount,
  }
}).sort((a, b) => +new Date(b.date) - +new Date(a.date))
