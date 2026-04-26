# Q1 — OpenAPI 3.1.1 Specification
### Record Label Artist API

This folder contains the OpenAPI 3.1.1 specification for a Record Label API.  
This is a **design document** — it describes the API structure, endpoints, authentication, and data schemas. No server code is required for this question.

---

## File

| File | Description |
|---|---|
| `artist-api.yaml` | Complete OpenAPI 3.1.1 specification |

---

## What the Spec Covers

### Authentication
- All endpoints are secured using **Basic Authentication**
- Every request must include a valid `username` and `password` in the request header

### Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/artists` | Returns a paginated list of artists |
| `POST` | `/artists` | Adds a new artist to the database |
| `GET` | `/artists/{artistname}` | Returns a specific artist by name |

### Pagination (GET /artists)
The client can control how much data is returned:

| Parameter | Type | Default | Description |
|---|---|---|---|
| `offset` | integer | 0 | Starting position (page number) |
| `limit` | integer | 10 | Number of artists per page (max 100) |

**Example:** `/artists?offset=0&limit=5` returns the first 5 artists.

### Status Codes Used

| Code | Meaning | When it occurs |
|---|---|---|
| `200` | OK | Successful GET request |
| `201` | Created | Artist successfully added via POST |
| `400` | Bad Request | Invalid data sent by client |
| `401` | Unauthorized | Missing or wrong credentials |
| `404` | Not Found | Artist with given name doesn't exist |
| `409` | Conflict | Artist with same username already exists |
| `500` | Internal Server Error | Something went wrong on the server |

### Schemas (components/schemas)

| Schema | Purpose |
|---|---|
| `Artist` | Shape of an artist returned from the database (includes `id`) |
| `NewArtist` | Shape of artist data sent by client when creating (no `id`) |
| `ArtistListResponse` | Paginated wrapper returned by GET /artists |
| `Error` | Standard error response format used across all error codes |

> **Why separate `Artist` and `NewArtist`?**  
> When a client creates an artist, they don't provide the `id` — the database generates it automatically. So the input schema (`NewArtist`) has no `id`, but the output schema (`Artist`) does.

---

## How to View the Spec

### Option 1 — VS Code (Recommended)
1. Open this folder in **VS Code**
2. Install the extension: **OpenAPI (Swagger) Editor** by 42Crunch
3. Open `artist-api.yaml`
4. Press `Cmd + Shift + P` and search for **"OpenAPI: show preview using swagger ui"**
5. A visual, interactive API documentation will open on the right side

### Option 2 — Swagger Editor Online
1. Go to [https://editor.swagger.io](https://editor.swagger.io)
2. Delete the default content on the left
3. Copy and paste the contents of `artist-api.yaml`
4. The visual documentation will render on the right automatically

---

## Sample Data

The spec uses the following Indian artists as examples:

| Artist Name | Genre | Albums | Username |
|---|---|---|---|
| Arijit Singh | Bollywood | 8 | arijitsingh |
| Shreya Ghoshal | Classical | 5 | shreyaghoshal |