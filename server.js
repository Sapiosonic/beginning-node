const http = require('http');

const server = http.createServer((req, resp) =>{
  console.log(req.url);
  resp.end('Hello World');
});

server.listen(3000);