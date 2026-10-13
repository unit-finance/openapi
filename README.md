# unit-sdks

Generation harness and committed SDK output for the Unit API in four languages,
generated from the [`unit-openapi`](https://github.com/unit-finance/unit-openapi)
spec with `openapi-generator-cli`.

| Language | Generator | Output | Package |
|----------|-----------|--------|---------|
| Node (TS) | `typescript-axios` | `sdks/node/` | `@unit-finance/unit-openapi-node-sdk` (npm) |
| Java | `java` (okhttp-gson, Maven) | `sdks/java/` | `co.unit:unit-openapi-java-sdk` (Maven Central) |
| Python | `python` (urllib3, pydantic v2) | `sdks/python/` | `unit-python-sdk` (PyPI) |
| Ruby | `ruby` (typhoeus) | `sdks/ruby/` | `unit_openapi_ruby_sdk` (RubyGems) |

Per-language source of truth (generator config, curated manifests, integration
tests) lives under [`templates/<lang>/`](templates/), outside the wiped output
tree. The generated `sdks/<lang>/` trees are committed; CI fails on drift.

## Spec input

The spec is **not** authored here. `spec-version.json` pins which
`unit-openapi` release the SDKs were generated from:

```jsonc
{ "repo": "unit-finance/unit-openapi", "version": "0.1.0", "assetName": "openapi.bundled.json" }
```

`npm run fetch-spec` downloads the matching `openapi.bundled.json` release asset
into `spec/openapi.bundled.json` (git-ignored, derived). Because `unit-openapi`
is private, set `SPEC_REPO_TOKEN` (a PAT/App token with Contents: read on that
repo) so `fetch-spec` can resolve and download the release asset via the GitHub
API; without a token it falls back to the anonymous download URL (public repos
only). Other overrides for local / CI use: `SPEC_BUNDLE_PATH` (local file) or
`SPEC_BUNDLE_URL`.

## Commands

```bash
npm ci
npm run generate-sdks      # fetch-spec -> generate + prepare + place tests, all langs

# Integration tests (gated on UNIT_SANDBOX_TOKEN; skip cleanly when unset)
npm run test:sdk:node
npm run test:sdk:java
npm run test:sdk:python
npm run test:sdk:ruby

# Test coverage report: which spec operations lack integration tests per language
npm run test-coverage      # writes test-coverage-report.json (git-ignored)

# Author/repair tests for uncovered operations via a Cursor agent
# (needs CURSOR_API_KEY; run `npm run test-coverage` first to produce the report)
npm run author-tests
```

Generation needs Node 18+ and a JDK 11+ (the generator is a Java JAR; version
pinned in `openapitools.json`). Tests additionally need the relevant language
runtime; Maven/venv/bundle are bootstrapped under `sdks/.maven`,
`sdks/.python-venv`, `sdks/.ruby-bundle` (git-ignored).

## Pipeline role

```
unit-openapi release ──(repository_dispatch: spec-released)──▶ regenerate-on-spec-release.yaml
  ──▶ bumps spec-version.json, regenerates, detects test-coverage gaps; if any (and
      CURSOR_API_KEY is set) a Cursor agent authors/repairs tests under templates/<lang>/,
      then opens "Regenerate SDKs for spec X" PR  (step 3)
  ──▶ merge to main ──▶ CI succeeds ──▶ tag-releases.yaml publishes a missing GitHub Release vX.Y.Z
  ──▶ publish.yaml publishes Node, Java, Python, and Ruby (step 4)
```

When new spec operations land without integration coverage, the regeneration
job runs `npm run test-coverage` and, if gaps exist, invokes a Cursor SDK agent
(`scripts/agents/author-tests.ts`, local runtime) to write the missing tests
under `templates/<lang>/`. The agent is constrained to the test source trees
(see `.cursor/rules/integration-tests.mdc`); its output is validated by the
drift gate and sandbox suites on the resulting PR, which stays human-reviewed.

## Required secrets

| Secret | Used by | Purpose |
|--------|---------|---------|
| `SDK_BOT_TOKEN` | `regenerate-on-spec-release.yaml`, `tag-releases.yaml` | PAT used to open the regeneration PR and to publish the `vX.Y.Z` GitHub Release (a PAT triggers CI on the PR and `publish.yaml` on the release, unlike `GITHUB_TOKEN`). Use a fine-grained PAT scoped to this repo with Contents + Pull requests: read & write |
| `SPEC_REPO_TOKEN` | `ci.yaml`, `regenerate-on-spec-release.yaml`, `publish.yaml` | read the private `unit-openapi` releases in `fetch-spec`. PAT/App token with Contents: read on `unit-openapi` |
| `CURSOR_API_KEY` | `regenerate-on-spec-release.yaml` | run the test-authoring Cursor agent on coverage gaps (optional; step skips when unset) |
| `UNIT_SANDBOX_TOKEN` | `ci.yaml`, `regenerate-on-spec-release.yaml` | run sandbox integration tests (optional) |
| `MAVEN_CENTRAL_USERNAME` / `MAVEN_CENTRAL_PASSWORD` | `publish.yaml` (`maven-central` environment) | Maven Central user token |
| `MAVEN_GPG_PRIVATE_KEY` / `MAVEN_GPG_PASSPHRASE` | `publish.yaml` (`maven-central` environment) | artifact signing |

npm, PyPI and RubyGems publish with trusted publishing (OIDC), so they need no
token: configure `publish.yaml` as the trusted publisher on each registry.
Maven Central has no trusted publishing, so its secrets live in the
`maven-central` GitHub Environment, which should require reviewer approval.

## Versioning

`spec-version.json` holds two kinds of SDK version:

- `globalSdkVersion` is the shared GitHub Release version. After a merge to
  `main`, if CI succeeds, `tag-releases.yaml` creates a missing GitHub Release
  `vX.Y.Z` for it, and publishing that release triggers `publish.yaml`.
  Regeneration raises it automatically when the new spec is newer.
- `sdkVersions.<lang>` (`node`, `java`, `python`, `ruby`) is each SDK's own
  package version. `npm run generate-sdks` stamps it onto that SDK's manifest
  and it is the version published to the registry. These are bumped by hand.

Each publish job skips when its `sdkVersions` entry is already on the
registry, so a release only ships the SDKs whose version was bumped. To
release, bump the `sdkVersions` entries you want to ship and `globalSdkVersion`,
then merge. Manual `workflow_dispatch` on `publish.yaml` publishes a single
SDK at its current `sdkVersions` entry.
