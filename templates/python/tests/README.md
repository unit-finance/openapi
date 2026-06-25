# Python SDK integration tests

Real integration tests that exercise every operation of the generated Python
SDK (`sdks/python/`) against the Unit sandbox API at
`https://api.s.unit.sh`.

## Layout

This directory is the **source of truth** for the tests. After running
`npm run generate-sdks` from the repo root, the test sources are mirrored
into `sdks/python/tests/` (git-ignored) where they are runnable
as a sibling of the generated SDK and import it as the installed
`unit_finance_sdk` package.

Do not edit files under `sdks/python/tests/` directly — those
are overwritten on every regeneration.

## Running

From the repo root:

```sh
# 1. Make sure the SDK and the placed tests dir are up to date:
npm run generate-sdks

# 2. Provide a sandbox bearer token, then run:
UNIT_SANDBOX_TOKEN=eyJhbGciOi... npm run test:sdk:python
```

`test:sdk:python` bootstraps a git-ignored virtualenv at
`sdks/.python-venv/`, installs the freshly-generated SDK (editable)
plus `pytest` and `python-dotenv`, and runs the suite. It needs only a
Python 3.8+ interpreter on the host (override with `$UNIT_PYTHON`).

Without `UNIT_SANDBOX_TOKEN` every live suite is skipped and the run still
exits 0. This keeps the entry point usable on machines that don't have
sandbox credentials.

## Environment variables

| Var | Required | Default | Notes |
|---|---|---|---|
| `UNIT_SANDBOX_TOKEN` | yes (otherwise tests skip) | — | Bearer JWT for the sandbox. |
| `UNIT_SANDBOX_BASE_URL` | no | `https://api.s.unit.sh` | Override for non-default sandboxes. |

A `.env.example` sits next to the SDK after placement; copy to `.env`, which
`conftest.py` auto-loads by walking up from the test directory. Real
environment variables always win over `.env`.

## Coverage

One file per operation in `applications/`:

| Operation | File |
|---|---|
| `create_application` (Business live; Individual / SoleProprietor serialization) | `applications/test_create.py` |
| `get_by_id` | `applications/test_get_by_id.py` |
| `list` | `applications/test_list.py` |
| `update_application` (UpdateBusiness variant) | `applications/test_update.py` |
| `update_business_beneficial_owner` | `applications/test_update_beneficial_owner.py` |
| `cancel_application` | `applications/test_cancel.py` |
| `check_registered_agent_address` | `applications/test_check_registered_agent_address.py` |

Tests assert structural correctness (HTTP status, JSON:API envelope shape,
`data.type`, `data.id`, expected attribute keys) rather than specific
approval/decision states.

The spec types the `POST /applications` 201 `data` as `BusinessApplication`,
and the generated client deserializes response bodies strictly, so only the
Business variant survives a typed round-trip; the Individual and
SoleProprietor variants are validated as request-serialization checks
(mirroring the Java suite) rather than live round-trips.

## Side-effects

`create_application` creates real applications in the sandbox. Each run stamps
`tags.testRun` so the artifacts are filterable and traceable to a specific
run. `test_cancel.py` creates its own dedicated `AwaitingDocuments` Individual
application (via the magic SSN `000000003`) because the shared business
application auto-approves and `cancel` is only valid for `PendingReview` /
`AwaitingDocuments`.
