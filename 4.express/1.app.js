const express = require('express')
const app = express()
const PORT = 3000

app.use((req, resp, next) => {
  console.log(`[${new Date()}][${req.method}] req received at ${req.url}`)
  console.log('body', req.body)
  console.log('headers', req.headers)
  console.log('rawHeaders', req.rawHeaders)
  console.log('hostname', req.hostname)
  console.log('params', req.params)
  console.log('path', req.path)
  console.log('url', req.url)
  console.log('baseUrl', req.baseUrl)
  console.log('query', req.query)
  next()
})

app.get('/', (req, resp) => {
  resp.send('Hello Express')
})

app.post('/echo/*', 
  (req, resp, next) => {console.log('a pre-process'); next()} ,
  (req, resp, next) => {
    resp.send(`you sent a req to ${req.url}`)
})

app.post('/echo/kian', (req, resp) => { console.log('am i ever called? ')})

app.post('/unix/:time', (req, resp) => {
  resp.send(new Date(Number(req.params.time)))
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})

