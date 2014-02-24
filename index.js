var static = require('node-static'),
    http   = require('http');

var staticServer = new static.Server('public/');

var http = http.createServer(function (request, response) {
  staticServer.serve(request, response, function (err, res) {
    if (err) {
      response.writeHead(err.status, err.headers);
      response.end();
    }
  });
}).listen(3000);
