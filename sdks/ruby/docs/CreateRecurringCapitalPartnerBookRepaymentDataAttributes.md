# UnitFinanceSdk::CreateRecurringCapitalPartnerBookRepaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **description** | **String** | Repayment description (maximum of 50 characters), this will show up on the statement of the counterparty. |  |
| **transaction_summary_override** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this recurring repayment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateRecurringCapitalPartnerBookRepaymentDataAttributes.new(
  description: Capital Partner Book Repayments,
  transaction_summary_override: Paid Piper Repayment,
  idempotency_key: adjaw1sqvies-7aep52-h4d6sxh-8hfa,
  tags: null
)
```

