// HTTP funtionality is defined by: 1. http 2. https modules

// HTTP is a request-response protocol

// createServer() ---> used to create a server
// req: conrains info about: 1. client 2. the requested resource
// res: contains mehtods and inof abut the response
// res.end(): must be called ... where the code goes
// res.writeHead(): 1. status code 2. resopone header
// .listen(): specify port to listen to server

const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi form server');
});


// *************** Routs ********************************

// NOTE: a request mwthod is also called a verb
// NOTE: route: verb + URL

// example
http.createServer(function (req, res) {
  if(req.url == '/route' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hi form a route\n'+ 'user agent: '+req.headers['user-agent']);
  }else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end();
  }

}).listen(1338, '127.0.0.1');

// headers are components of req and res and are important for the functionality of a web app

// NOTE: req --> an http.ClientRequest object
// NOTE: res --> an http.ServerRequest object

// server's most important job is routing!
