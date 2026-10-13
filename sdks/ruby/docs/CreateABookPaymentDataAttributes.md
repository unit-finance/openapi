# UnitFinanceSdk::CreateABookPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). |  |
| **description** | **String** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
| **transaction_summary_override** | **String** | Optional. If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateABookPaymentDataAttributes.new(
  amount: 10000,
  description: Funding,
  transaction_summary_override: null,
  idempotency_key: null,
  tags: null
)
```

