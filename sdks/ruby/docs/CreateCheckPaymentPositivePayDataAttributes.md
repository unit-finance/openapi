# UnitFinanceSdk::CreateCheckPaymentPositivePayDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_number** | **String** | Check number to authorize. |  |
| **amount** | **Integer** | Expected amount in cents. Must match within 1$ tolerance. |  |
| **payee_name** | **String** | Payee name to add specificity. | [optional] |
| **expiration_date** | **Date** | When the authorization expires. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCheckPaymentPositivePayDataAttributes.new(
  check_number: 10045,
  amount: 250000,
  payee_name: ACME Corp,
  expiration_date: Thu Dec 31 00:00:00 UTC 2026,
  tags: {&quot;category&quot;:&quot;vendor&quot;}
)
```

