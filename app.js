const path = require('path')
const express = require('express')
const app = express()
const PORT = 1314

var history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, './')))

app.listen(PORT, console.log.bind(null, `blog serve running in ${PORT}...`))
