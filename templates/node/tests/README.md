# Node SDK integration tests

Real integration tests that exercise every operation of the generated Node
SDK (`sdks/node/`) against the Unit sandbox API at
`https://api.s.unit.sh`.

## Layout

This directory is the **source of truth** for the tests. After running
`npm run generate-sdks` from the repo root, the test sources are mirrored
into `sdks/node/tests/` (git-ignored) where they are runnable
as a sibling of the generated SDK and import it via `../..`.

Do not edit files under `sdks/node/tests/` directly — those
are overwritten on every regeneration.

## Running

From the repo root:

```sh
# 1. Make sure the SDK and the placed tests dir are up to date:
npm run generate-sdks

# 2. Provide a sandbox bearer token, then run:
UNIT_SANDBOX_TOKEN=eyJhbGciOi... npm run test:sdk:node
```

Without `UNIT_SANDBOX_TOKEN` every suite is skipped and the run still
exits 0. This keeps the entry point usable on machines that don't have
sandbox credentials.

## Environment variables

| Var | Required | Default | Notes |
|---|---|---|---|
| `UNIT_SANDBOX_TOKEN` | yes (otherwise tests skip) | — | Bearer JWT for the sandbox. |
| `UNIT_SANDBOX_BASE_URL` | no | `https://api.s.unit.sh` | Override for non-default sandboxes. |

A `.env.example` sits next to this file; copy to `.env` (which `dotenv`
auto-loads in `jest.config.ts`'s `setupFiles`). The committed source
location's `.env` is git-ignored.

### Optional: editor type-checking on the source tree

Tests are executed from the placed mirror at `sdks/node/tests/`
where `npm install` runs as part of `npm run test:sdk:node`. The source
location here doesn't get an automatic `node_modules`, so your editor
may flag missing types for `jest` / `axios`. To silence those locally,
run once:

```sh
npm install --prefix templates/node/tests --no-audit --no-fund
```

This creates a git-ignored `node_modules/` at the source location that
the editor can resolve types from.

## Coverage

One file per operation in `applications/`. Every operation listed in the
SDK's `docs/ApplicationsApi.md` has at least one test:

| Operation | File |
|---|---|
| `createApplication` (Business / Individual / SoleProprietor variants) | `applications/create.test.ts` |
| `getById` | `applications/get-by-id.test.ts` |
| `list` | `applications/list.test.ts` |
| `updateApplication` (UpdateBusiness variant) | `applications/update.test.ts` |
| `updateBusinessBeneficialOwner` | `applications/update-beneficial-owner.test.ts` |
| `cancelApplication` | `applications/cancel.test.ts` |
| `checkRegisteredAgentAddress` | `applications/check-registered-agent-address.test.ts` |

Tests assert structural correctness (HTTP status, JSON:API envelope
shape, `data.type`, `data.id`, expected attribute keys) rather than
specific approval/decision states, which depend on sandbox magic SSNs we
don't control here.

## Side-effects

`createApplication` creates real applications in the sandbox. The
test run stamps a UUID on `tags.testRun` so the artifacts are
filterable and traceable to a specific run.

`cancel.test.ts` creates its own dedicated Individual application (with
the magic SSN `000000003` that lands it in `AwaitingDocuments`) and
cancels *that*, because the shared business application auto-approves in
the sandbox and `cancel` is only valid for `PendingReview` /
`AwaitingDocuments`. The shared business application and the standalone
Individual / SoleProprietor variants created in `create.test.ts` are
therefore not cleaned up — known sandbox-pollution risk; can be
addressed later via `afterAll` cleanup hooks.
