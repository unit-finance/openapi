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
