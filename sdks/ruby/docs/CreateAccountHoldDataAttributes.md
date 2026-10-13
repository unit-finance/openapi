# UnitFinanceSdk::CreateAccountHoldDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). |  |
| **expired_at** | **Date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | [optional] |
| **description** | **String** | Description of the AccountHold (maximum of 80 characters). |  |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateAccountHoldDataAttributes.new(
  amount: 6000,
  expired_at: Tue Oct 29 00:00:00 UTC 2024,
  description: Hold reason,
  idempotency_key: null
)
```

