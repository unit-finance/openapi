# UnitFinanceSdk::CreateRecurringCreditBookPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). |  |
| **description** | **String** | Payment description (maximum of 80 characters), this will show up on the statement of the counterparty. |  |
| **transaction_summary_override** | **String** | Optional. If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] |
| **schedule** | [**CreateScheduleType**](CreateScheduleType.md) | The schedule details of the recurring payment. All times must be in the future. |  |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateRecurringCreditBookPaymentDataAttributes.new(
  amount: 40,
  description: Subscription - Basic Plan,
  transaction_summary_override: null,
  schedule: null,
  idempotency_key: null,
  tags: null
)
```

