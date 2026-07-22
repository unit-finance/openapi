# UnitFinanceSdk::CreateFeeDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents) to charge the account. |  |
| **description** | **String** | Description of the fee (maximum of 50 characters). |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateFeeDataAttributes.new(
  amount: 1000,
  description: Monthly Subscription,
  tags: null,
  idempotency_key: null
)
```

