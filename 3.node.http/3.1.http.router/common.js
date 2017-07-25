exports.logger = function (req, resp) {
  console.log(`[${new Date()}][${req.method}] request received ${req.url}`)
}

exports.closeError = function (req, resp, statusCode, errMessage) {
  resp.writeHead(statusCode, {'Content-Type': 'text/html'})
  resp.end(`
    <h1 style='color: red'> an error happened: ${errMessage} </h1>
  `)
}