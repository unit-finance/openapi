# Unit API SDKs

Official client libraries for the [Unit API](https://www.unit.co/docs/api/),
generated from the Unit OpenAPI specification.

| Language | Package | Registry |
|----------|---------|----------|
| TypeScript / JavaScript | `@unit-finance/unit-openapi-node-sdk` | [npm](https://www.npmjs.com/package/@unit-finance/unit-openapi-node-sdk) |
| Java | `co.unit:unit-openapi-java-sdk` | [Maven Central](https://central.sonatype.com/artifact/co.unit/unit-openapi-java-sdk) |
| Python | `unit-openapi-python-sdk` | [PyPI](https://pypi.org/project/unit-openapi-python-sdk/) |
| Ruby | `unit_openapi_ruby_sdk` | [RubyGems](https://rubygems.org/gems/unit_openapi_ruby_sdk) |

### Versioning

There are two kinds of version number:

- **Release version** (`vX.Y.Z`): the version of a
  [GitHub Release](https://github.com/unit-finance/unit-openapi-sdks/releases)
  of this repository. Each release covers all four SDKs and lists what changed.
- **Package version**: the version each SDK is published with on its own
  registry. Package versions are independent, so the Node, Java, Python, and
  Ruby packages usually have different numbers, and a release only publishes
  the SDKs whose package version changed.

To see which package versions a release contains and which API spec version
they were generated from, look at `spec-version.json` at that release's tag.

## Authentication

Every request needs a Unit API token, sent as a bearer token. Create one in
the Unit Dashboard and keep it out of source control, for example in a
`UNIT_TOKEN` environment variable.

The examples below target the sandbox (`https://api.s.unit.sh`). Use
`https://api.unit.co` in production.

## TypeScript / JavaScript

```sh
npm install @unit-finance/unit-openapi-node-sdk
```

```ts
import { AccountsApi, Configuration } from "@unit-finance/unit-openapi-node-sdk";

const config = new Configuration({
  basePath: "https://api.s.unit.sh",
  accessToken: process.env.UNIT_TOKEN,
});

const accounts = new AccountsApi(config);
const { data } = await accounts.getAccount({ accountId: "10001" });
console.log(data);
```

## Java

Maven:

```xml
<dependency>
  <groupId>co.unit</groupId>
  <artifactId>unit-openapi-java-sdk</artifactId>
  <version>LATEST_VERSION</version>
</dependency>
```

Gradle:

```groovy
implementation "co.unit:unit-openapi-java-sdk:LATEST_VERSION"
```

```java
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.auth.HttpBearerAuth;

ApiClient client = Configuration.getDefaultApiClient();
client.setBasePath("https://api.s.unit.sh");
((HttpBearerAuth) client.getAuthentication("bearerAuth"))
    .setBearerToken(System.getenv("UNIT_TOKEN"));

AccountsApi accounts = new AccountsApi(client);
System.out.println(accounts.getAccount("10001", null, null));
```

## Python

```sh
pip install unit-openapi-python-sdk
```

```python
import os
import unit_finance_sdk

configuration = unit_finance_sdk.Configuration(
    host="https://api.s.unit.sh",
    access_token=os.environ["UNIT_TOKEN"],
)

with unit_finance_sdk.ApiClient(configuration) as client:
    accounts = unit_finance_sdk.AccountsApi(client)
    print(accounts.get_account("10001"))
```

## Ruby

```sh
gem install unit_openapi_ruby_sdk
```

```ruby
require "unit_openapi_ruby_sdk"

UnitFinanceSdk.configure do |config|
  config.host = "api.s.unit.sh"
  config.access_token = ENV.fetch("UNIT_TOKEN")
end

accounts = UnitFinanceSdk::AccountsApi.new
p accounts.get_account("10001")
```

## Contributing

The code in this repository is generated, so edits made here are overwritten
on the next release. To report a bug or request a change, open an issue.
