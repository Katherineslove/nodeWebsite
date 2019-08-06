const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
  console.log('Your server is running on port 3000');
}).listen(3000);

console.log('The server is running on port 3000');
