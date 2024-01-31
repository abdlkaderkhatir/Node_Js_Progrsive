const http = require("http");

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
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    // add form here
    res.write("<html>");
    res.write("<head><title>first server</title></head>");
    res.write("<body>");
    res.write("<h1>Hello Khatir</h1>");
    res.write("<form method='POST' action='/message'>");
    res.write("<input type='text' name='username' />");
    res.write("<input type='submit' value='submit' />");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
  } else if (req.url === "/message" && req.method === "POST") {
    // add form here
    res.write("<html>");
    res.write("<head><title>first server</title></head>");
    res.write("<body>");
    res.write("<h1>Hello Khatir</h1>");
    res.write("<h2>Message received</h2>");
    res.write("</body>");
    res.write("</html>");
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>first server</title></head>");
    res.write("<body>");
    res.write("<h1>Hello Khatir</h1>");
    res.write("</body>");
    res.write("</html>");
  }

  res.end();
  // process.exit();
});

server.listen(3050);
