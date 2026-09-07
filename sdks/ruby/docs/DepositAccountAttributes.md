# UnitFinanceSdk::DepositAccountAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | Optional. The date the resource was updated. | [optional] |
| **name** | **String** | Name of the account holder. |  |
| **deposit_product** | **String** | The name of the deposit product. |  |
| **routing_number** | **String** | Routing number of account. |  |
| **account_number** | **String** | Account number, together with the routingNumber forms the identifier of the account on the ACH network. |  |
| **currency** | **String** | Currency of the account. |  |
| **balance** | **Integer** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
| **hold** | **Integer** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
| **available** | **Integer** | The available balance for spending (in cents). Equals the balance minus the hold amount. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
| **interest_terms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. | [optional] |
| **freeze_reason** | **String** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] |
| **close_reason** | **String** | Optional. The reason the account was closed, either ByCustomer, Fraud or ByBank. | [optional] |
| **fraud_reason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] |
| **daca_status** | **String** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::DepositAccountAttributes.new(
  created_at: null,
  updated_at: null,
  name: null,
  deposit_product: null,
  routing_number: null,
  account_number: null,
  currency: null,
  balance: null,
  hold: null,
  available: null,
  tags: null,
  status: null,
  interest_terms: null,
  freeze_reason: null,
  close_reason: null,
  fraud_reason: null,
  daca_status: null
)
```

