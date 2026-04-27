# Record Label API System
### BITS Pilani — API Based Products Assignment

This repository contains solutions for all three questions of the assignment. Each question is self-contained in its own folder.

---

## Project Structure

```
api-based-products-assignment-1/
│
├── README.md
│
├── record-label-apis/
│   ├── artist-api.yaml
│   └── README.md
│
├── kong-api-gateway/
│   ├── README.md
│   ├── kong-config.yml
│   ├── docker-compose.yml
│   ├── mock-api/
│   │   └── server.js
│   └── test-rate-limit.js
│
└── book-info-service/
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

## Q1 — OpenAPI Specification Summary

Designed a complete OpenAPI 3.1.1 specification for a Record Label API that includes:

- Basic Authentication to secure all endpoints
- `GET /artists` — returns a paginated list of artists (offset + limit support)
- `POST /artists` — adds a new artist to the database
- `GET /artists/{artistname}` — returns a specific artist by name
- Proper status codes for all success and error scenarios
- Reusable schemas using the `components/schemas` section

📁 See `/record-label-apis/README.md` for instructions on how to view the spec.

---

## Q2 — KONG API Gateway Summary

Configured KONG API Gateway with:

- Rate Limiting Plugin — restricts number of requests per minute per client
- Request Size Limiting Plugin — restricts oversized request payloads
- DB-less mode using a declarative `kong-config.yml` file
- Docker used to run KONG locally via `docker-compose.yml`
- A mock API server to test the gateway
- A test script to verify rate limiting behaviour
- Screenshots of all commands and test results included in the folder's README

📁 See `/kong-api-gateway/README.md` for setup and configuration instructions.

---

## Q3 — Book Info Service Summary

Built a Book Info Service using three API paradigms over the same book data.

Implemented endpoints:

### REST

```txt
GET /books
GET /books/{id}
POST /books
```

### RPC

```txt
POST /getBook
POST /createBook
```

### GraphQL

```graphql
query {
  book(id: 1) {
    title
    author
  }
}
```

A small service layer is used so REST, RPC and GraphQL share the same business logic.

Folder:

```txt
book-info-service/
```

## Author

> BITS Pilani  
> Kasralkar Aditya Samir (2024TM93619)
> API Based Products  
> Assignment 1