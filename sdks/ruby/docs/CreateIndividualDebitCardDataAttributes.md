# UnitFinanceSdk::CreateIndividualDebitCardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **shipping_address** | [**AddressType**](AddressType.md) | Address to ship the card to. If not specified, the individual address is used. | [optional] |
| **design** | **String** | You may omit if you only have one card design. Please contact Unit if you need multiple card designs. | [optional] |
| **additional_embossed_text** | **String** | Optional, up to 21 characters. Use for a second cardholder name, company name, or other data to be embossed on a card. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **limits** | **Hash&lt;String, Object&gt;** | See Limits (cents). | [optional] |
| **print_only_business_name** | **Boolean** | Optional, default is false. Print the business name on the card instead of the card holder&#39;s name. Available only for Sole Proprietorship typed customers that have a DBA property. | [optional] |
| **expiry_date** | **String** | Expiration date of the card in one of the formats MM/yy or yyyy-MM or yy-MM (e.g. \&quot;03/27\&quot;). Must be between 3 to 5 years. Default is 4 years. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateIndividualDebitCardDataAttributes.new(
  shipping_address: null,
  design: null,
  additional_embossed_text: null,
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8,
  tags: null,
  limits: {&quot;dailyWithdrawal&quot;:50000,&quot;dailyPurchase&quot;:50000,&quot;monthlyWithdrawal&quot;:500000,&quot;monthlyPurchase&quot;:700000},
  print_only_business_name: null,
  expiry_date: null
)
```

