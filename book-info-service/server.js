const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");

const restRoutes = require("./rest/books.routes");
const rpcRoutes = require("./rpc/rpc.routes");
const schema = require("./graphql/schema");
const rootValue = require("./graphql/resolver");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Book Info Service is running",
    availableParadigms: {
      REST: ["GET /books", "GET /books/:id", "POST /books"],
      RPC: ["POST /getBook", "POST /createBook"],
      GraphQL: ["POST /graphql"]
    }
  });
});

app.use("/books", restRoutes);
app.use("/", rpcRoutes);

app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue
  })
);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Book Info Service running on http://localhost:${PORT}`);
});