const http = require('http');
const fs = require('fs');


http.createServer(function(req, res){
  console.log(`${req.method} request for ${req.url}`);
  if(req.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    })
  } else if (req.url === '/css/style.css') {
    fs.readFile('./public/css/style.css', 'UTF-8', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    })
  } else if (req.url === '/js/script.js') {
    fs.readFile('./public/js/script.js', 'UTF-8', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/js'});
      res.end(data);
    })
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('404 file not found');
  }

  console.log('Your server is running on port 3000');

}).listen(3000);

console.log('The server is running on port 3000');
