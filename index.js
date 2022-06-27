const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000
const root = path.join(__dirname, 'dist')

app.use(cors())
app.use(express.static(root))

app.get('/', (_req, res) => {
  res.sendFile(root)
})

app.listen(port, () => {
  console.log(`⚡️ Server listening on http://localhost:${port}`)
})
