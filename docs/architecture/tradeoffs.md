## Context
NFR-PERF-01: Users experience slow RSVP listing during peaks; target p95<200ms at 200 RPS.

## Choice
We chose read-through caching + cursor pagination to reduce query latency and payload size.

## Alternatives Rejected
- Offset pagination: simple but degrades at scale.
- Precompute nightly aggregates: faster reads but stale data.

## Risks & Mitigations
Cache staleness -> TTL 60s + invalidation on write.
Hot keys -> shard by eventId + jitter retries.

## Verification Hook
T-PERF-01 with p95<200ms threshold. Evidence: evidence/EV-perf-rsvp.html.

