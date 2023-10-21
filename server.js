// require takes the name as a string argument and returns the module
const http = require('http');

// http.createServer takes a callback function
const server = http.createServer((req, resp) =>{
  // send a request
  console.log(req.url);
  // send the response
  resp.end('Hello World');
});

// listen to a port
server.listen(3000);