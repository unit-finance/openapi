# UnitFinanceSdk::GetExpectedACHCompletionDateDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **direction** | **String** | The direction of the ACH payment. One of Credit or Debit. |  |
| **amount** | **Integer** | The payment amount (in cents). Must be &gt;&#x3D; 1. |  |
| **same_day** | **Boolean** | Optional, default is false. Whether same-day ACH processing is requested. See Same Day ACH. | [optional] |
| **submission_at** | **Time** | Optional, defaults to the current time. Hypothetical submission time used for the estimate. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::GetExpectedACHCompletionDateDataAttributes.new(
  direction: Credit,
  amount: 10000,
  same_day: null,
  submission_at: null
)
```

