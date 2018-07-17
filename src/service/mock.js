const context = require.context('../../static/docs', true, /\.mdjs$/)

export default {
  mapList: context.keys().map(path => {
    const mdjs = require('../../static/docs/' + path.slice(2))
    return {
      ...mdjs.info,
      content: mdjs.content.trim()
    }
  })
}
