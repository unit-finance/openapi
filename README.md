# unit-sdks

Distribution repo for the Unit API SDKs. It holds the generated SDK trees and
the workflows that publish them. Nothing here is edited by hand.

| Language | Output | Package |
|----------|--------|---------|
| Node (TS) | `sdks/node/` | `@unit-finance/unit-openapi-node-sdk` (npm) |
| Java | `sdks/java/` | `co.unit:unit-openapi-java-sdk` (Maven Central) |
| Python | `sdks/python/` | `unit-openapi-python-sdk` (PyPI) |
| Ruby | `sdks/ruby/` | `unit_openapi_ruby_sdk` (RubyGems) |

Generation, templates, integration tests, and the release process are
documented in [`unit-openapi/docs/sdk`](https://github.com/unit-finance/unit-openapi/tree/main/docs/sdk).
Changes to the SDKs belong there; this repo only receives the generated output.

## Releasing

`spec-version.json` records the spec version the SDKs were generated from,
the shared release version (`globalSdkVersion`), and each package version
(`sdkVersions.<lang>`).

- `tag-releases.yaml` runs when `spec-version.json` changes on `main` and
  creates the GitHub Release `v<globalSdkVersion>` if it doesn't exist yet.
- `publish.yaml` runs on that release and publishes each SDK at its
  `sdkVersions` entry, skipping any version already on the registry. It can
  also be run manually for a single SDK.

## Required secrets

| Secret | Used by | Purpose |
|--------|---------|---------|
| `SDK_BOT_TOKEN` | `tag-releases.yaml` | PAT used to publish the GitHub Release (a release made with `GITHUB_TOKEN` would not trigger `publish.yaml`) |
| `MAVEN_CENTRAL_USERNAME` / `MAVEN_CENTRAL_PASSWORD` | `publish.yaml` (`maven-central` environment) | Maven Central user token |
| `MAVEN_GPG_PRIVATE_KEY` / `MAVEN_GPG_PASSPHRASE` | `publish.yaml` (`maven-central` environment) | Artifact signing |

npm, PyPI, and RubyGems use trusted publishing (OIDC) with `publish.yaml` as
the trusted publisher, so they need no token.
