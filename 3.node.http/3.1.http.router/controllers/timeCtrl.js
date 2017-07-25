const timeCtrl = function(req, resp, body) {
  resp.writeHead(200, {'Content-Type': 'application/json'})
  body = JSON.parse(body)
  resp.end(JSON.stringify({
    parsedTime: new Date(Number(body.time))
  }))
}

module.exports = timeCtrl