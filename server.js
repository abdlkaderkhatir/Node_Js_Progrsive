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
   process.exit();
});

server.listen(3000);
// // create http server
// var server = http.createServer(function(request, response) {
//     var filePath = false;
//     // default file
//     if (request.url == '/') {
//         filePath = 'public/index.html';
//     // translate url path to relative file path
//     } else {
//         filePath = 'public' + request.url;
//     }
//     // get absolute file path
//     var absPath = './' + filePath;
//     // serve static file
//     serveStatic(response, cache, absPath);
// });