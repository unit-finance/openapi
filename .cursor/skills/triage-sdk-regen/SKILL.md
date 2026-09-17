---
name: triage-sdk-regen
description: >-
  Triage a freshly auto-generated spec-bump / regeneration branch for the Unit
  SDKs: author missing integration tests, run each language SDK, fix fixable
  failures in templates/, and skip + document the unfixable ones in SLICES.md.
  Use after pulling a regeneration branch, when spec-version.json bumps, when
  author-tests / test-coverage reports gaps, or when SDK integration tests fail.
---

# Triage an SDK regeneration branch

This repo is a generation harness. A dispatch-driven workflow opens a branch
that bumps the `unit-openapi` spec and regenerates all four SDKs (node, java,
python, ruby). Your job on that branch: cover new operations with tests, fix
what breaks, and document what cannot be fixed in this repo.

## Guardrails (read first)

- Only create or edit tests under `templates/<lang>/`. NEVER edit anything under
  `sdks/` — it is generated output, wiped on every generate, and a CI drift gate
  fails on manual edits.
- Test runners print the *placed* path, not the source. Map it back before editing:

  | Failure points at (placed, git-ignored) | Edit here (source of truth) |
  | --- | --- |
  | `sdks/node/tests/` | `templates/node/tests/` |
  | `sdks/java/src/test/java/` | `templates/java/tests/` |
  | `sdks/python/tests/` | `templates/python/tests/` |
  | `sdks/ruby/spec/` | `templates/ruby/spec/` |

- Do not hand-edit the spec (`spec/openapi.bundled.json`), generator config
  (`templates/<lang>/config.json`), dependency manifests, or the publish/CI
  workflows. They are derived or owned elsewhere.
- Confirm an edit landed in the template, not the placed copy: re-mirror
  (`npm run place-<lang>-tests`) and check your change survives.

## Workflow

Copy this checklist and track progress:

```
- [ ] Step 1: Orient on the branch
- [ ] Step 2: Coverage + author missing tests
- [ ] Step 3: Validate each language (cheap loop)
- [ ] Step 4: Triage each failure (fixable vs not)
- [ ] Step 5: Document skips in SLICES.md
- [ ] Step 6: Finalize
```

### Step 1: Orient

Confirm you are on the regeneration branch. Note the `version` / `sdkVersion`
bump and the `slices` list in `spec-version.json`. A spec bump can remove
operations, rename JSON:API discriminator `type` literals, and add new models —
expect breakage of those three kinds.

### Step 2: Coverage + author missing tests

Run `npm run test-coverage` (or `npm run author-tests-local`, which also copies
the authoring prompt to the clipboard) and read the gaps in
`test-coverage-report.json`. Author the missing tests yourself, one file per
operation, mirroring the existing structure. Follow each tree's `README.md` and
an existing example file. The full authoring constraints live in
`scripts/agents/author-tests.ts`; the essentials:

- Reuse the shared `helpers/` (API construction, fixtures, shared app).
- Gate every suite on the sandbox token so it self-skips when
  `UNIT_SANDBOX_TOKEN` is unset: node `describeIfToken`, python `@requires_token`,
  java `ApiSupport.assumeToken()`, ruby `:sandbox` tagging.
- Assert structural correctness only (HTTP status, JSON:API envelope shape,
  `data.type`, `data.id`, expected attribute keys) — never approval/decision
  states, which depend on sandbox magic SSNs.
- Tag any sandbox resources with `tags.testRun` for traceability.

### Step 3: Validate each language (cheap loop)

Do NOT run the full `npm run generate-sdks` while iterating — it rebuilds all
four SDKs and is slow. For each language you touched:

1. `npm run generate-sdk:<lang>` then `npm run place-<lang>-tests`
   (`<lang>` = node | java | python | ruby).
2. `npm run test:sdk:<lang>` and make it compile/lint/load cleanly. With no
   sandbox token, live cases self-skip and that counts as success.

Fix and repeat per language.

### Step 4: Triage each failure

For every failure, decide with this rule:

**Fixable in this repo** → fix in `templates/`:
- A renamed request `type` discriminator literal → update the fixture.
- A removed operation → delete its test.
- Newly added surface with no coverage → author the test (Step 2).
- Test-only drift against the new SDK surface (renamed method/model,
  changed import).

**Not fixable here** → gate/skip the test and document it (Step 5):
- Org bank-agreement flag on the sandbox org (e.g. `enableHoldOnAccounts`,
  Dynamic Clearing Period, batch-release provisioning).
- Sandbox returns 500 / 403 for a valid request (feature off for this org).
- Spec-vs-response-body mismatch owned by `unit-openapi` (required field the
  sandbox omits, wrong scalar type). Read the error body before assuming the
  payload is wrong — see `templates/node/tests/helpers/holds.ts` for the pattern
  of skipping a capability-gated operation rather than failing.
- Missing operation (e.g. no list-payments) that makes a state unreachable.

### Step 5: Document skips in SLICES.md

Match the existing structure in `SLICES.md`:

- Put an operation in the **"Same in all four SDKs"** table when the behavior is
  identical across languages; use a **"Where SDKs differ"** per-operation table
  when languages diverge.
- Use the vocabulary already defined there: **hard skip** (never calls the API),
  **abort** (calls, then bails early), **runs** (asserts).
- Always state the *why*: the root cause and where the real fix lives (org
  config, sandbox, or a spec change in `unit-openapi`).

### Step 6: Finalize

- Run `npm run generate-sdks` ONCE to re-mirror everything consistently.
- If the spec version changed, update the `SLICES.md` header line (spec version
  and `slices`) to match `spec-version.json`.
- Summarize what you fixed vs what you documented as unfixable, with the reason
  for each skip.

## References

- `AGENTS.md` — the generation-harness rules (never edit `sdks/`).
- `.cursor/rules/integration-tests.mdc` — test conventions and guardrails.
- `templates/<lang>/tests/README.md` (ruby: `templates/ruby/spec/README.md`) —
  per-language structure and helpers.
- `SLICES.md` — existing skip vocabulary and documentation format.
