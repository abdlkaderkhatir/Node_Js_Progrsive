// core module in node.js
var http = require('http');
// core module in node.js
var fs = require('fs');
// core module in node.js
var path = require('path');
// core module in node.js
var mime = require('mime');



// cache object
var cache = {};




// 404 error
function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}
// send file
function sendFile(response, filePath, fileContents) {
    response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
    response.end(fileContents);
}



// serve static files
function serveStatic(response, cache, absPath) {
    // check if file is cached in memory
    if (cache[absPath]) {
        // serve file from memory
        sendFile(response, absPath, cache[absPath]);
    } else {
        // check if file exists
        fs.exists(absPath, function(exists) {
            // file exists
            if (exists) {
                // read file from disk
                fs.readFile(absPath, function(err, data) {
                    // error
                    if (err) {
                        send404(response);
                    } else {
                        // cache file in memory
                        cache[absPath] = data;
                        // serve file from disk
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404(response);
            }
        });
    }
}

// 301 redirect
// 304 not modified
// 400 bad request
// 401 unauthorized
// 403 forbidden
// 404 not found
// 500 internal server error
// 503 service unavailable
// 504 gateway timeout
// 200 ok
// 201 created
// 202 accepted
// 203 non-authoritative information
// 204 no content
// 205 reset content
// 206 partial content

// create http server
var server = http.createServer(function(request, response) {
    var filePath = false;
    // default file
    if (request.url == '/') {
        filePath = 'public/index.html';
    // translate url path to relative file path
    } else {
        filePath = 'public' + request.url;
    }
    // get absolute file path
    var absPath = './' + filePath;
    // serve static file
    serveStatic(response, cache, absPath);
});