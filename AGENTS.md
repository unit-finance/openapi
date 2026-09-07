# Working in this repo

This is a generation harness. Almost everything you will be tempted to edit is
generated output that gets wiped and rewritten. Read this before changing files.

## Never edit `sdks/` directly

`sdks/<lang>/` is build output. Every `generate-sdk:<lang>` script starts with
`rm -rf sdks/<lang>`, so anything you write there is destroyed on the next
generation. The committed SDK trees are also covered by a CI drift gate that
fails when their contents don't match a fresh generation.

The integration test directories are an especially easy trap, because test
runner output prints the placed paths (`sdks/node/tests/...`), not the source
paths. Those directories are git-ignored and re-mirrored from `templates/`
by the `place-<lang>-tests` scripts:

| Edit here (source of truth)  | Not here (placed copy, git-ignored) |
|------------------------------|-------------------------------------|
| `templates/node/tests/`      | `sdks/node/tests/`                  |
| `templates/java/tests/`      | `sdks/java/src/test/java/`          |
| `templates/python/tests/`    | `sdks/python/tests/`                |
| `templates/ruby/spec/`       | `sdks/ruby/spec/`                   |

If a stack trace points at `sdks/`, map it back through this table and fix the
template. A quick way to confirm you edited the right tree:

```bash
npm run place-node-tests   # re-mirrors templates -> sdks, wiping local edits
```

If your change survives that, it was in the template. If it disappears, it
wasn't. Generator config (`templates/<lang>/config.json`) and dependency
manifests (`templates/java/pom-dependencies.xml`) are source of truth too.

## Other derived files

- `spec/openapi.bundled.json` — downloaded by `npm run fetch-spec`. The spec is
  authored in the separate `unit-openapi` repo; do not hand-edit it here.
- `spec-version.json` — `slices` is derived by `fetch-spec`; don't edit by hand.
- `test-coverage-report.json` — written by `npm run test-coverage`.

## Generating tests

Integration tests are authored from a coverage report, not by hand-crawling the
spec. The pipeline (driven by `scripts/agents/author-tests.ts`, runnable via
`npm run author-tests`, and invoked automatically after spec regeneration) is:

1. `npm run test-coverage` walks the spec and writes `test-coverage-report.json`,
   flagging every operation that lacks a test in each language.
2. `npm run author-tests` reads that report and drives a Cursor SDK agent to
   write or repair the missing tests. If the report has no gaps it is a no-op.
   Requires `$CURSOR_API_KEY`; `$UNIT_SANDBOX_TOKEN` is optional (when unset the
   suites self-skip and the run still exits 0).

To author the tests yourself instead of driving the SDK agent, run
`npm run author-tests-local` (macOS). It runs step 1, then builds the exact
prompt (no API key, network, or SDK needed) and copies it to your clipboard so
you can paste it straight into a chat/agent. It is a no-op when there are no
gaps. (`npm run author-tests -- --print-prompt` prints the prompt to stdout from
an existing report without refreshing coverage or copying.)

Whether the agent or you are authoring, the rules are the same (see the full
conventions in `.cursor/rules/integration-tests.mdc` and each tree's `README.md`):

- Only create or edit tests under `templates/<lang>/` — never under `sdks/`
  (see the drift-gate rule above). Re-mirror with `npm run generate-sdks`.
- One test file per operation, named to match the existing files in that tree,
  reusing the shared `helpers/` for API construction, fixtures, and shared app.
- Gate every suite on the sandbox token so it self-skips when
  `UNIT_SANDBOX_TOKEN` is unset: node `describeIfToken`, python `@requires_token`,
  java `ApiSupport.assumeToken()`, ruby `:sandbox` tagging.
- Assert structural correctness only (HTTP status, JSON:API envelope shape,
  `data.type`, `data.id`, expected attribute keys) — not approval/decision
  states, which depend on sandbox magic SSNs we don't control.
- Tag any resources created in the sandbox with `tags.testRun` for traceability.
- Validate cheaply per language: `npm run generate-sdk:<lang>` +
  `npm run place-<lang>-tests`, then that language's runner
  (`npm run test:sdk:<lang>`). Run `npm run generate-sdks` once at the end.

## When the spec version changes

Bumping the spec regenerates the SDKs, which can remove operations, rename
JSON:API discriminator values, and add new models. Tests then fail to compile
against the new surface. Fix them in `templates/`, and expect three kinds of
breakage: removed operations (delete the test), renamed request `type` literals
(update the fixture), and newly added surface with no coverage yet.

The spec is not always a perfect description of the sandbox. Some fields are
marked optional but are rejected when absent, and some operations are gated on
per-org bank agreement flags. When a request 400s, read the error body before
assuming the payload is wrong — see `templates/node/tests/helpers/holds.ts` for
how a capability-gated operation is skipped rather than failed.
