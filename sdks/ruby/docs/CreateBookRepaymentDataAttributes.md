# UnitFinanceSdk::CreateBookRepaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **description** | **String** | Repayment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
| **amount** | **Integer** | The amount (cents) to repay. |  |
| **transaction_summary_override** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateBookRepaymentDataAttributes.new(
  description: test,
  amount: 20,
  transaction_summary_override: override,
  tags: null,
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8
)
```

