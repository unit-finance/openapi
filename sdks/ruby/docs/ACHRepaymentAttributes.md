# UnitFinanceSdk::ACHRepaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **status** | **String** | Either Pending, PendingReview, Returned, Sent or Rejected |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ACHRepaymentAttributes.new(
  created_at: null,
  updated_at: null,
  amount: null,
  status: null,
  tags: null
)
```

