# UnitFinanceSdk::CheckDepositAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | One of AwaitingImages, AwaitingFrontImage, AwaitingBackImage, Pending, PendingReview, Rejected, Clearing, Sent, Canceled, Returned. |  |
| **reason** | **String** | More information about the status. | [optional] |
| **description** | **String** | Check Deposit description (maximum of 50 characters). |  |
| **amount** | **String** | The amount (cents) of the check deposit. |  |
| **check_number** | **String** | The serial number printed at the bottom of the check | [optional] |
| **counterparty** | [**CheckCounterpartyType**](CheckCounterpartyType.md) | The party the check belongs to. | [optional] |
| **clearing_days_override** | **Integer** | The amount of days it will take a check deposit to clear if a clearingDaysOverride was provided. See Dynamic Clearing Period | [optional] |
| **settlement_date** | **Time** | Optional, For Pending or Clearing, shows the date on which the check will be settled. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CheckDepositAttributes.new(
  created_at: null,
  status: null,
  reason: null,
  description: null,
  amount: null,
  check_number: null,
  counterparty: null,
  clearing_days_override: null,
  settlement_date: null,
  tags: null
)
```

