// Plain-English learning outcomes per FastAPI lesson (shown at top of theory view).

export const FASTAPI_LESSON_OUTCOMES = {
  "fastapi-0": [
    "Explain what an API and FastAPI are in everyday language",
    "Describe how a client (app/browser) talks to a server",
    "Spot where REST APIs appear in real apps you use",
  ],
  "fastapi-1": [
    "Name common HTTP methods (GET, POST, PUT, DELETE)",
    "Read status codes like 200, 201, 404, and 422",
    "Match the right method to create, read, update, or delete",
  ],
  "fastapi-2": [
    "Turn Python dicts into JSON strings and back",
    "See why APIs send JSON instead of raw Python",
    "Build a small payload a FastAPI route could return",
  ],
  "fastapi-3": [
    "Create a `FastAPI()` app and a GET route",
    "Test routes in code with `TestClient` (no browser needed)",
    "Return JSON from a path function",
  ],
  "fastapi-4": [
    "Capture dynamic URL segments with path parameters",
    "Type-hint path params for clearer APIs",
    "Build routes like `/users/{user_id}`",
  ],
  "fastapi-5": [
    "Read optional filters from query strings (`?q=...`)",
    "Give query params default values",
    "Combine path and query parameters on one route",
  ],
  "fastapi-6": [
    "Accept JSON bodies on POST routes",
    "Read fields from a request body dict",
    "Return 201-style created responses in code",
  ],
  "fastapi-7": [
    "Define request schemas with Pydantic `BaseModel`",
    "Get automatic validation on incoming JSON",
    "Use model fields with types and defaults",
  ],
  "fastapi-8": [
    "Shape API responses with `response_model`",
    "Hide internal fields from clients",
    "Return consistent JSON structures",
  ],
  "fastapi-9": [
    "Store data in memory with a Python list or dict",
    "Understand why real apps later use databases",
    "Share state safely across routes in one app",
  ],
  "fastapi-10": [
    "List all items with GET `/items`",
    "Fetch one item by id with GET `/items/{id}`",
    "Return 404 when an id is missing",
  ],
  "fastapi-11": [
    "Create resources with POST",
    "Assign ids to new records",
    "Validate duplicates before inserting",
  ],
  "fastapi-12": [
    "Update records with PUT or PATCH patterns",
    "Delete records with DELETE",
    "Keep the in-memory store consistent",
  ],
  "fastapi-13": [
    "Add field rules with Pydantic `Field()`",
    "Reject bad input before it hits your logic",
    "Write helpful validation constraints",
  ],
  "fastapi-14": [
    "Raise `HTTPException` for business errors",
    "Return clear error messages and status codes",
    "Handle not-found and forbidden cases",
  ],
  "fastapi-15": [
    "Set status codes on decorators (`status_code=201`)",
    "Choose 200 vs 201 vs 204 appropriately",
    "Document behavior with meaningful responses",
  ],
  "fastapi-16": [
    "Inject shared logic with `Depends()`",
    "Reuse database-style helpers across routes",
    "Keep route functions short and readable",
  ],
  "fastapi-17": [
    "Protect routes with a fake API-key dependency",
    "Return 401 when credentials are missing",
    "Pattern-match real auth you will see later",
  ],
  "fastapi-18": [
    "Paginate lists with skip/limit dependencies",
    "Compose multiple dependencies on one route",
    "Build reusable query helpers",
  ],
  "fastapi-19": [
    "Split large apps with `APIRouter`",
    "Mount routers under prefixes like `/users`",
    "Organize code by feature folder",
  ],
  "fastapi-20": [
    "Add middleware for logging or timing",
    "Run code before and after each request",
    "Understand the request/response pipeline",
  ],
  "fastapi-21": [
    "Queue background tasks that run after responding",
    "Decouple slow work from fast HTTP replies",
    "Use `BackgroundTasks` for email-style jobs",
  ],
  "fastapi-22": [
    "Write thorough tests with `TestClient`",
    "Assert status codes and JSON bodies",
    "Test error paths—not only happy paths",
  ],
  "fastapi-23": [
    "Use auto-generated OpenAPI docs (`/docs`)",
    "Read schemas FastAPI builds from your models",
    "Share interactive docs with teammates",
  ],
  "fastapi-24": [
    "Combine CRUD, Pydantic, Depends, and routers",
    "Build a small Todo API end-to-end",
    "Prove you can ship a coherent FastAPI service",
  ],
};
