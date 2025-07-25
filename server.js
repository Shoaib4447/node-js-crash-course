import http from "http";

const server = http.createServer((req, res) => {
  //   res.setHeader("content-Type", "text/html");
  //   res.setHeader("content-Type", "text/plain");
  //   res.write("Hello Node.js");
  res.writeHead(500, "content-Type", "application/json");
  res.write(JSON.stringify({ message: "server error" }));
  res.end();
});

server.listen(8000, () => {
  console.log("server running on port : 8000");
});
