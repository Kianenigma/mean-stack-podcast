const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

function _bodyParserJson(req, resp, next) {
  if ( req.headers['content-type'] === 'application/json' ) {
    let body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', () => {
      req.body = JSON.parse(body.toString())
      next()
    })
  }
  else {
    next()
  }
}

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, resp) => {
  resp.sendFile(__dirname + '/index.html')
})

app.post('/unix', (req, resp) => {
  console.log(req.body)
  resp.json({
    parsedTime: new Date(Number(req.body.time))
  })
})

// Not found
app.use((req, resp) => {
  resp
    .status(404)
    .type('html')
    .send('<h1>PAGE NOT FOUND</h1>')
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})