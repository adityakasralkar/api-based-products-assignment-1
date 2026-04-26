# Record Label API System
### BITS Pilani — API Based Products Assignment

This repository contains solutions for all three questions of the assignment. Each question is self-contained in its own folder.

---

## Project Structure

```
record-label-api-system/
│
├── README.md                        
│
├── record-label-apis/
│   ├── artist-api.yaml              ← Q1: OpenAPI 3.1.1 Specification
│   └── README.md                    ← Q1: How to view the spec
│
└── kong-api-gateway/
    ├── README.md                    ← Q2: Setup and usage instructions
    ├── kong-config.yml              ← Q2: KONG Gateway Configuration
    ├── docker-compose.yml           ← Q2: Docker setup
    ├── mock-api/
    │   └── server.js                ← Q2: Mock API server
    └── test-rate-limit.js           ← Q2: Rate limit test script
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

## Author

> BITS Pilani  
> Kasralkar Aditya Samir (2024TM93619)
> API Based Products  
> Assignment 1