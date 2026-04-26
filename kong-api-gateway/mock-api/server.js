const http = require("http");

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
  },
];

const server = http.createServer((req, res) => {
  const startTime = new Date().toISOString();

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    console.log(`[${startTime}] ${req.method} ${req.url} received by Mock API`);

    if (req.method === "GET" && req.url === "/books") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Books fetched successfully",
          data: books,
        })
      );
      return;
    }

    if (req.method === "POST" && req.url === "/books") {
      console.log(`Request body size: ${Buffer.byteLength(body)} bytes`);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Book created successfully",
          receivedBodySize: Buffer.byteLength(body),
        })
      );
      return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Route not found",
      })
    );
  });
});

server.listen(3000, () => {
  console.log("Mock Book API is running on port 3000");
});