const express = require('express')
const favicon = require('express-favicon')

const { join } = require('path')

const port = process.env.PORT || 8080
const app = express()

app.use(favicon(join(__dirname, '/dist/favicon.ico')))

app.use(express.static(__dirname))

app.use(express.static(join(__dirname, 'dist')))

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/*', function (req, res) {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`⚡️ Server listening on http://localhost:${port}`)
})
