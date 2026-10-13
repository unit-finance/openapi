# UnitFinanceSdk::CreateCheckStopPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents) to look on payments to stop. | [optional] |
| **check_number** | **String** | The check number to look on a check payment to stop. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCheckStopPaymentDataAttributes.new(
  amount: 23,
  check_number: 006753,
  tags: {&quot;test&quot;:&quot;test&quot;},
  idempotency_key: null
)
```

