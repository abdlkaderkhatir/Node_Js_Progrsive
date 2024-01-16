const http = require('http');

// var fs = require('fs');
// var path = require('path');
// const { log } = require('console');

// explain whats mime
// mime is a module that provides ability to derive a MIME type based on filename extension

// Status codes and their meaning
// 200 ok
// 201 created
// 202 accepted
// 301 redirect
// 304 not modified
// 400 bad request
// 401 unauthorized
// 403 forbidden
// 404 not found
// 500 internal server error
// 503 service unavailable
// 504 gateway timeout

const server = http.createServer((req, res) => {
   console.log(`${req.method} request for ${req.url}`);
   res.setHeader("Content-Type","text/html");
   res.write("<html>");
   res.write("<head><title>first server</title></head>");
   res.write("<body>");
   res.write("<h1>Hello Khatir</h1>")
   res.write("</body>");
   res.write("</html>");
   res.end();
   // process.exit();
});

server.listen(3050);
