const http = require("http");
const hostname = "127.0.0.1"; //localhost
const fs = require("fs");
const port = 3000;

fs.readFile("index.html", (err, html) => {
  if (err) {
    throw err;
  }
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text-plain");
    res.write(html);
    res.end("Server Hello");
  });

  server.listen(port, hostname, () => {
    console.log("Server Started on port " + port);
  });
});
