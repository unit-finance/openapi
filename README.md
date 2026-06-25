# unit-sdks

Generation harness and committed SDK output for the Unit API in four languages,
generated from the [`unit-openapi`](https://github.com/unit-finance/unit-openapi)
spec with `openapi-generator-cli`.

| Language | Generator | Output | Package |
|----------|-----------|--------|---------|
| Node (TS) | `typescript-axios` | `sdks/node/` | `@unit-finance/unit-node-sdk` (npm) |
| Java | `java` (okhttp-gson, Maven) | `sdks/java/` | `com.unit.finance:unit-java-sdk` (Maven Central) |
| Python | `python` (urllib3, pydantic v2) | `sdks/python/` | `unit-python-sdk` (PyPI) |
| Ruby | `ruby` (typhoeus) | `sdks/ruby/` | `unit_finance_sdk` (RubyGems) |

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
into `spec/openapi.bundled.json` (git-ignored, derived). Overrides for local /
CI use: `SPEC_BUNDLE_PATH` (local file) or `SPEC_BUNDLE_URL`.

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
  ──▶ merge to main, push <lang>-vX.Y.Z tag ──▶ publish.yaml publishes to registry  (step 4)
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
| `SDK_BOT_APP_ID` / `SDK_BOT_PRIVATE_KEY` | `regenerate-on-spec-release.yaml` | GitHub App credentials used to mint a token that opens the regeneration PR (App token triggers CI on the PR, unlike `GITHUB_TOKEN`). App needs Contents + Pull requests: read & write, installed on this repo |
| `CURSOR_API_KEY` | `regenerate-on-spec-release.yaml` | run the test-authoring Cursor agent on coverage gaps (optional; step skips when unset) |
| `UNIT_SANDBOX_TOKEN` | `ci.yaml`, `regenerate-on-spec-release.yaml` | run sandbox integration tests (optional) |
| `NPM_TOKEN` | `publish.yaml` | npm publish |
| `MAVEN_CENTRAL_USERNAME` / `MAVEN_CENTRAL_PASSWORD` | `publish.yaml` | Maven Central |
| `MAVEN_GPG_PRIVATE_KEY` / `MAVEN_GPG_PASSPHRASE` | `publish.yaml` | artifact signing |
| `RUBYGEMS_API_KEY` | `publish.yaml` | gem push |

PyPI uses trusted publishing (OIDC) — configure the publisher on PyPI instead
of a token.

## Versioning

Each language is versioned independently via its curated manifest under
`templates/<lang>/` and released by pushing a `<lang>-vX.Y.Z` tag. Bump those
in step with `spec-version.json`.
