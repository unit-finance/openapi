# UnitFinanceSdk::ACHCounterpartyAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **name** | **String** | The account holder&#39;s name (whether an individual or a business). |  |
| **routing_number** | **String** | Valid 9-digit ABA routing transit number. |  |
| **bank** | **String** | Name of the bank. |  |
| **account_number** | **String** | Bank account number. |  |
| **account_type** | **String** | Either Checking, Savings or Loan. |  |
| **type** | **String** | Either Business, Person or Unknown. |  |
| **permissions** | **String** | Either CreditOnly or CreditAndDebit. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ACHCounterpartyAttributes.new(
  created_at: null,
  name: null,
  routing_number: null,
  bank: null,
  account_number: null,
  account_type: null,
  type: null,
  permissions: null,
  tags: null
)
```

