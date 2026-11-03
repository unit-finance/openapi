# UnitFinanceSdk::CreateAccountHoldDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). Minimum is 1. |  |
| **idempotency_key** | **String** | 1 to 255 characters. See Idempotency. |  |
| **expired_at** | **Date** | Optional. Date only (e.g. \&quot;2024-10-29\&quot;). The date the account hold will be automatically released at. | [optional] |
| **description** | **String** | Optional. Description of the AccountHold (maximum of 80 characters). | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateAccountHoldDataAttributes.new(
  amount: 6000,
  idempotency_key: 1234567890,
  expired_at: Tue Oct 29 00:00:00 UTC 2024,
  description: Hold reason,
  tags: null
)
```

