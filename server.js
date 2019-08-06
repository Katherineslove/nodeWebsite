const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  console.log(`${req.method} request for ${req.url}`);
  if(req.url === '/') {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end(`
    //   <html>
    //     <head>
    //       <title>This is our home page</title
    //     </head>
    //     <body>
    //       <h1>This is our home page</h1>
    //       <p>${req.method} request for ${req.url}</p>
    //     </body>
    //   </html>
    //   `);
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('404 file not found');
  }
  console.log('Your server is running on port 3000');
}).listen(3000);

console.log('The server is running on port 3000');
