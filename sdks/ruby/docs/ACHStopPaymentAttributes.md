# UnitFinanceSdk::ACHStopPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **min_amount** | **Integer** | The amount (cents) above which a received ACH payments will be stopped. | [optional] |
| **originator_name** | **Array&lt;String&gt;** | Array of originator names to look on a payment to stop. | [optional] |
| **direction** | **String** | Debit only. |  |
| **expiration** | **Time** | Expiration date fo the stop payment | [optional] |
| **is_multi_use** | **Boolean** |  | [optional] |
| **description** | **String** |  |  |
| **disable_reason** | **String** | One of Expired, Requested or PaymentStopped | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ACHStopPaymentAttributes.new(
  created_at: null,
  updated_at: null,
  min_amount: null,
  originator_name: null,
  direction: null,
  expiration: null,
  is_multi_use: null,
  description: null,
  disable_reason: null,
  idempotency_key: null,
  tags: null
)
```

