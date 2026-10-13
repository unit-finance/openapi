# UnitFinanceSdk::CreateACHStopPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **min_amount** | **Integer** | The amount (in cents) above which a payment will be stopped. At least one originatorName or minAmount must be provided. | [optional] |
| **originator_name** | **Array&lt;String&gt;** | The name of the originator of the payment to look for in payments to stop. At least one originatorName or minAmount must be provided. See guide for further details. | [optional] |
| **direction** | **String** | Debit only. |  |
| **expiration** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). | [optional] |
| **is_multi_use** | **Boolean** | Available only for ACH Stop Payments. False by default. | [optional] |
| **description** | **String** | Up to 255 characters |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | Optional, but **strongly recommended**. See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateACHStopPaymentDataAttributes.new(
  min_amount: 5001,
  originator_name: [&quot;Pied Pier&quot;,&quot;Pied Pier Inc.&quot;],
  direction: Debit,
  expiration: Tue Jul 01 00:00:00 UTC 2025,
  is_multi_use: true,
  description: Stop subscription payments greater than $50 to the gym.,
  tags: {&quot;test&quot;:&quot;test&quot;},
  idempotency_key: null
)
```

