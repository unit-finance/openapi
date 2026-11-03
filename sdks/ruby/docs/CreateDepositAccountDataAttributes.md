# UnitFinanceSdk::CreateDepositAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **deposit_product** | **String** | The name of the deposit product. |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **overdraft_limit** | **Integer** | Optional. Overdraft limit in cents. Must be 0 or greater. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateDepositAccountDataAttributes.new(
  deposit_product: checking,
  tags: null,
  idempotency_key: null,
  overdraft_limit: null
)
```

