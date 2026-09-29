# UnitFinanceSdk::CheckPaymentPositivePayAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | One of Active, Expired, or Cancelled. |  |
| **check_number** | **String** | Check number to authorize. |  |
| **payee_name** | **String** | Payee name to add specificity. | [optional] |
| **amount** | **Integer** | Expected amount in cents. |  |
| **expiration_date** | **Date** | When the authorization expires. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CheckPaymentPositivePayAttributes.new(
  created_at: null,
  status: null,
  check_number: null,
  payee_name: null,
  amount: null,
  expiration_date: null,
  tags: null
)
```

