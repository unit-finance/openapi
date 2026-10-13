# UnitFinanceSdk::CreateExternalRepaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **description** | **String** | Repayment description (maximum of 80 characters). |  |
| **amount** | **Integer** | The amount (cents) to repay. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateExternalRepaymentDataAttributes.new(
  description: External payment,
  amount: 50000,
  tags: null,
  idempotency_key: null
)
```

