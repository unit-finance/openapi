# UnitFinanceSdk::RecurringCreditACHPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. |  |
| **addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] |
| **status** | **String** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. |  |
| **number_of_payments** | **Integer** | Represents the number of payments that were created by this recurring payment. |  |
| **schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::RecurringCreditACHPaymentAttributes.new(
  created_at: null,
  updated_at: null,
  amount: null,
  description: null,
  addenda: null,
  status: null,
  number_of_payments: null,
  schedule: null,
  tags: null
)
```

