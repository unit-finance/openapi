# UnitFinanceSdk::CreateCheckDepositDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The check amount (in cents) to deposit. |  |
| **description** | **String** | Description of the check deposit (maximum of 50 characters). |  |
| **clearing_days_override** | **Float** | See Dynamic Clearing Period. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCheckDepositDataAttributes.new(
  amount: 20000,
  description: Check deposit,
  clearing_days_override: null,
  tags: null,
  idempotency_key: null
)
```

