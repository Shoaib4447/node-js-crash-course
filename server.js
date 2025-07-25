import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // Dealing with res object

  //   res.setHeader("content-Type", "text/plain");
  //   res.setHeader("content-Type", "text/html");
  //   res.writeHead(500, "content-Type", "application/json");
  //   res.write(JSON.stringify({ message: "server error" }));
  //   res.write("Hello Node.js");

  // Dealing with req object
  console.log(req.url);
  console.log(req.method);

  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello Homepage URL</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Hello AboutPage URL</h1>");
      } else {
        res.writeHead(400, { "content-type": "text/html" });
        res.end("<h1>Page Not Found</h1>");
      }
    } else {
      throw new Error("Method Not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.write("server error");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
