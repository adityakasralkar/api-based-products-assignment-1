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
└── record-label-apis/
    ├── artist-api.yaml              ← Q1: OpenAPI 3.1.1 Specification
    └── README.md                    ← Q1: How to view the spec
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

## Author

> BITS Pilani  
> Kasralkar Aditya Samir (2024TM93619)
> API Based Products  
> Assignment 1