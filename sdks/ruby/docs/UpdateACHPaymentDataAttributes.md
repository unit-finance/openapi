# UnitFinanceSdk::UpdateACHPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. | [optional] |
| **clearing_days_override** | **Integer** | Only supports ACH Payments with direction Debit in status PendingReview or Pending. See Dynamic Clearing Period. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateACHPaymentDataAttributes.new(
  tags: null,
  clearing_days_override: null
)
```

