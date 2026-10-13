# UnitFinanceSdk::CreateIndividualVirtualDebitCardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **idempotency_key** | **String** | See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **limits** | **Hash&lt;String, Object&gt;** | See Limits (cents). | [optional] |
| **expiry_date** | **String** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateIndividualVirtualDebitCardDataAttributes.new(
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8,
  tags: null,
  limits: {&quot;dailyWithdrawal&quot;:50000,&quot;dailyPurchase&quot;:50000,&quot;monthlyWithdrawal&quot;:500000,&quot;monthlyPurchase&quot;:700000},
  expiry_date: null
)
```

