# Question 3: Book Info Service

This folder contains a simple Book Info Service implemented using three API paradigms:

1. REST
2. RPC
3. GraphQL

All three paradigms use the same book data and the same service logic.

---

## Folder Structure

```txt
book-info-service/
│
├── README.md
├── package.json
├── server.js
├── data/
│   └── books.json
├── services/
│   └── book.service.js
├── rest/
│   └── books.routes.js
├── rpc/
│   └── rpc.routes.js
└── graphql/
    ├── schema.js
    └── resolver.js
```

---

## Install Dependencies

```bash
cd book-info-service
npm install
```

---

## Run the Service

```bash
npm start
```

Server runs at:

```txt
http://localhost:3000
```

---

## REST API

REST is resource-based. Here, books are treated as resources.

### Get all books

```bash
curl http://localhost:3000/books
```

### Get book by id

```bash
curl http://localhost:3000/books/1
```

### Create book

```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Microservices Patterns","author":"Chris Richardson","genre":"Microservices","publishedYear":2018}'
```

---

## RPC API

RPC is action-based. The endpoint names describe actions.

### Get book

```bash
curl -X POST http://localhost:3000/getBook \
  -H "Content-Type: application/json" \
  -d '{"id":1}'
```

### Create book

```bash
curl -X POST http://localhost:3000/createBook \
  -H "Content-Type: application/json" \
  -d '{"title":"System Design Interview","author":"Alex Xu","genre":"System Design","publishedYear":2020}'
```

---

## GraphQL API

GraphQL uses a single endpoint where the client sends a query.

Endpoint:

```txt
http://localhost:3000/graphql
```

### Get one book

```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { book(id: 1) { title author } }"}'
```

### Get one book with more fields

```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { book(id: 1) { id title author genre publishedYear } }"}'
```

### Get all books

```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { books { id title author genre publishedYear } }"}'
```

### Create book

```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"mutation { createBook(input: { title: \"Building Microservices\", author: \"Sam Newman\", genre: \"Microservices\", publishedYear: 2021 }) { id title author genre publishedYear } }"}'
```

---

## Same Data from Different Paradigms

For book id `1`, the same data can be accessed in three different ways.

### REST

```bash
curl http://localhost:3000/books/1
```

### RPC

```bash
curl -X POST http://localhost:3000/getBook \
  -H "Content-Type: application/json" \
  -d '{"id":1}'
```

### GraphQL

```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { book(id: 1) { id title author genre publishedYear } }"}'
```

All three return the same book information:

```json
{
  "id": 1,
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Software Engineering",
  "publishedYear": 2008
}
```

---

## Comparison of REST, RPC and GraphQL

| Point | REST | RPC | GraphQL |
|---|---|---|---|
| Style | Resource-based | Action-based | Query-based |
| Main endpoint example | `/books/1` | `/getBook` | `/graphql` |
| How data is requested | Using HTTP methods and URLs | Calling specific actions | Sending a query |
| Best suited for | CRUD operations | Commands or task-based operations | Flexible data fetching |
| Response control | Server decides response | Server decides response | Client selects fields |
| In this project | Books are resources | Book operations are actions | Client asks for required book fields |

---

## Summary

This service shows how the same Book Info domain can be exposed using three API styles:

- REST: `/books`, `/books/{id}`
- RPC: `/getBook`, `/createBook`
- GraphQL: `query { book(id: 1) { title author } }`

The service keeps shared book logic in `services/book.service.js` so all three paradigms use the same data source.