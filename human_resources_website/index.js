const http = require('http');
const employeeService = require('./lib/employees');
const responder = require('./lib/responseGenerator');
const staticFile = responder.staticFile('/public');

http.createServer(function(req,res){
  // a url wot work with in case there are parameters
  var _url;
  // if the client usues lower case
  req.method = req.method.toUpperCase();
  console.log(req.method+ ' '+ req.url);

  // accept only GET requests
  if (req.method !== 'GET'){
    res.writeHead(501, {'Content-Type': 'text/plain'});
    return res.end(req.method + ' not implemented by this server!');
  }

  if(_url = /^\/employees$/i.exec(req.url)){
    // a list of emplyees
    employeeService.getEmployees(function(error, data) {
      if(error){
        responder.send500(error, res);
      }

      return responder.sendJson(data, res);
  });

  } else if(_url = /^\/employees\/(\d+)$/i.exec(req.url)){
    // a single of employee
    employeeService.getEmployee(_url[1],function(error, data){
      if(error){
        responder.send500(error, res);
      }
      if(!data){
        return responder.send404(res);
      }

      return responder.sendJson(data, res);
    });
  } else {
    res.writeHead(200);
    return res.end('static file maybe');
  }

}).listen(1337, '127.0.0.1')

console.log('server running at http://127.0.0.1:1337/');
