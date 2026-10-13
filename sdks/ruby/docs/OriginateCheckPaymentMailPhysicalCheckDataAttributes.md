# UnitFinanceSdk::OriginateCheckPaymentMailPhysicalCheckDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents). Must be less than 100000000000 |  |
| **memo** | **String** | Check payment memo. This will be printed on the check (maximum of 40 characters) | [optional] |
| **send_date** | **Date** | Date only (e.g. 2022-06-23). The date the check will be submitted to the processor. Up to 180 days in the future. If left null or in the past, will default to today. | [optional] |
| **counterparty** | [**CheckPaymentCounterpartyType**](CheckPaymentCounterpartyType.md) | The payee&#39;s details . street and street2 combined may contain up to 50 characters. country must be \&quot;US\&quot;. |  |
| **description** | **String** | An internal description (maximum of 255 characters). This will not be printed on the check. |  |
| **idempotency_key** | **String** | See Idempotency. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::OriginateCheckPaymentMailPhysicalCheckDataAttributes.new(
  amount: 1000,
  memo: October paycheck,
  send_date: null,
  counterparty: null,
  description: October paycheck,
  idempotency_key: asdfghjkl,
  tags: null
)
```

