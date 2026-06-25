# Ruby SDK integration tests

Real integration tests that exercise every operation of the generated Ruby SDK
(`sdks/ruby/`) against the Unit sandbox API at
`https://api.s.unit.sh`.

## Layout

This directory is the **source of truth** for the tests. After running
`npm run generate-sdks` from the repo root, the test sources are mirrored into
`sdks/ruby/spec/` (git-ignored) where they are runnable as a
sibling of the generated SDK and load it as the installed `unit_finance_sdk`
gem. The generator's own `spec/**` stubs are suppressed, so the placed
integration suite owns `spec/` exclusively.

Do not edit files under `sdks/ruby/spec/` directly -- those are
overwritten on every regeneration.

## Running

From the repo root:

```sh
# 1. Make sure the SDK and the placed spec dir are up to date:
npm run generate-sdks

# 2. Provide a sandbox bearer token, then run:
UNIT_SANDBOX_TOKEN=eyJhbGciOi... npm run test:sdk:ruby
```

`test:sdk:ruby` installs gems into a git-ignored vendored path at
`sdks/.ruby-bundle/` (via `BUNDLE_PATH`) using the placed
`spec/Gemfile`, then runs `bundle exec rspec`. It needs a Ruby 2.7+ interpreter
on the host (override with `$UNIT_RUBY`) plus the native libcurl that
`typhoeus` binds to (libcurl ships by default on macOS and most Linux distros).

Without `UNIT_SANDBOX_TOKEN` every `:sandbox` example is skipped and the run
still exits 0. This keeps the entry point usable on machines that don't have
sandbox credentials.

## Environment variables

| Var | Required | Default | Notes |
|---|---|---|---|
| `UNIT_SANDBOX_TOKEN` | yes (otherwise specs skip) | — | Bearer JWT for the sandbox. |
| `UNIT_SANDBOX_BASE_URL` | no | `https://api.s.unit.sh` | Override for non-default sandboxes. |

A `.env.example` sits next to the SDK after placement; copy to `.env`, which
`spec_helper.rb` auto-loads by walking up from the spec directory. Real
environment variables always win over `.env`.

## Coverage

One file per operation in `applications/`:

| Operation | File |
|---|---|
| `create_application` (Business live; Individual / SoleProprietor serialization) | `applications/create_spec.rb` |
| `get_by_id` | `applications/get_by_id_spec.rb` |
| `list` | `applications/list_spec.rb` |
| `update_application` (UpdateBusiness variant) | `applications/update_spec.rb` |
| `update_business_beneficial_owner` | `applications/update_beneficial_owner_spec.rb` |
| `cancel_application` | `applications/cancel_spec.rb` |
| `check_registered_agent_address` | `applications/check_registered_agent_address_spec.rb` |

Specs assert structural correctness (HTTP status, JSON:API envelope shape,
`data.type`, `data.id`, expected attribute keys) rather than specific
approval/decision states.

The spec types the `POST /applications` 201 `data` as `BusinessApplication`,
and the generated client deserializes response bodies strictly, so only the
Business variant survives a typed round-trip; the Individual and SoleProprietor
variants are validated as request-serialization checks (mirroring the
Java/Python suites) rather than live round-trips.

## Side-effects

`create_application` creates real applications in the sandbox. Each run stamps
`tags.testRun` so the artifacts are filterable and traceable to a specific run.
`cancel_spec.rb` creates its own dedicated `AwaitingDocuments` Individual
application (via the magic SSN `000000003`) because the shared business
application auto-approves and `cancel` is only valid for `PendingReview` /
`AwaitingDocuments`.
