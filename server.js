// require takes the name as a string argument and returns the module
const http = require('http');
// File System module helps us to interact with the files in our server
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('not-found.html');


// http.createServer takes a callback function
const server = http.createServer((req, resp) =>{
  if(req.url === '/about')
    resp.end(aboutPage);
  else if(req.url === '/contact')
    resp.end(contactPage);
  else if(req.url === '/')
    resp.end(homePage);
  else{
    resp.writeHead(404);
    resp.end(notFoundPage);
  }
});

// listen to a port
server.listen(3000);