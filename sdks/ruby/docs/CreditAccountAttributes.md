# UnitFinanceSdk::CreditAccountAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | Optional. The date the resource was updated. | [optional] |
| **name** | **String** | Name of the account holder. |  |
| **credit_terms** | **String** | The selected credit terms. |  |
| **currency** | **String** | Currency of the account. |  |
| **credit_limit** | **Integer** | The credit limit (cents). |  |
| **balance** | **Integer** | The balance amount (cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of settled transactions minus any repayments. |  |
| **hold** | **Integer** | The hold amount (cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
| **available** | **Integer** | The available balance for spending (cents). Equals the credit limit, minus the balance and hold amounts. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
| **freeze_reason** | **String** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] |
| **close_reason** | **String** | Optional. The reason the account was closed, either ByCustomer, Overdue or Fraud. | [optional] |
| **close_reason_text** | **String** | Optional. An expanded free-text reason for account closure. | [optional] |
| **fraud_reason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreditAccountAttributes.new(
  created_at: null,
  updated_at: null,
  name: null,
  credit_terms: null,
  currency: null,
  credit_limit: null,
  balance: null,
  hold: null,
  available: null,
  tags: null,
  status: null,
  freeze_reason: null,
  close_reason: null,
  close_reason_text: null,
  fraud_reason: null
)
```

