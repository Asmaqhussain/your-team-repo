| Resource | Method | Path | Auth | Req Params/Body | 200/201 | 4xx/5xx | Error Schema | Pagination | Idempotency | Versioning | Notes |
|----------|--------|------|------|------------------|---------|---------|--------------|------------|-------------|------------|-------|
| RSVPs | GET | /v1/rsvps | Bearer rsvp:read | limit,cursor (limit<=100, default=25) | 200 list | 401,403,429,5xx | error_v1 | cursor; default=25; sort=createdAt,id | n/a | /v1 | ex: examples/rsvp_list.json |
| RSVPs | POST | /v1/rsvps | Bearer rsvp:write | body: examples/rsvp_create.json | 201 item | 400,401,403,409,422,429,5xx | error_v1 | n/a | Idempotency-Key; reuse 201 body (1h) | /v1 | ex: examples/rsvp_item_201.json; err: examples/error_422.json |
| Status | GET | /v1/status | Public | n/a | 200 { ok: true, version } | 5xx | error_v1 | n/a | n/a | /v1 | ex: examples/status_200.json |
