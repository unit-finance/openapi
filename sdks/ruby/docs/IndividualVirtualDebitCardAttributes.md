# UnitFinanceSdk::IndividualVirtualDebitCardAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. | [optional] |
| **last4_digits** | **String** | Last 4 digits of the debit card. |  |
| **expiration_date** | **String** | Card expiration date, formatted YYYY-MM, e.g \&quot;2020-05\&quot;. |  |
| **bin** | **String** | 9-digit Bank Identification Number (BIN). |  |
| **status** | **String** | Status of the card, one of: Active, Inactive, Stolen, Lost, Frozen, ClosedByCustomer, SuspectedFraud. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::IndividualVirtualDebitCardAttributes.new(
  created_at: null,
  updated_at: null,
  last4_digits: null,
  expiration_date: null,
  bin: null,
  status: null
)
```

