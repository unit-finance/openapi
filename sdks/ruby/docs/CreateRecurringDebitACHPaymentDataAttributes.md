# UnitFinanceSdk::CreateRecurringDebitACHPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). |  |
| **description** | **String** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on the statement of the counterparty. |  |
| **addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] |
| **schedule** | [**CreateScheduleType**](CreateScheduleType.md) | The schedule details of the recurring payment. All times must be in the future. |  |
| **verify_counterparty_balance** | **Boolean** | Optional, default is false. Verify the counterparty balance, if balance verification fails the payment will be rejected with reason set to CounterpartyInsufficientFunds. | [optional] |
| **same_day** | **Boolean** | Optional, default is false. See Same Day ACH. | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateRecurringDebitACHPaymentDataAttributes.new(
  amount: 1000,
  description: Rent-Apt15,
  addenda: null,
  schedule: null,
  verify_counterparty_balance: null,
  same_day: null,
  idempotency_key: null,
  tags: null
)
```

