// require takes the name as a string argument and returns the module
const http = require('http');

// http.createServer takes a callback function
const server = http.createServer((req, resp) =>{
  if(req.url === '/about')
    resp.end('The about page');
  else if(req.url === '/contact')
    resp.end('The contact page');
  else if(req.url === '/')
    resp.end('The home page');
  else{
    resp.writeHead(404);
    resp.end('Page not found');
  }
});

// listen to a port
server.listen(3000);