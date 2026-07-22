# UnitFinanceSdk::WalletAccountAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **name** | **String** | The official name. |  |
| **status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
| **wallet_terms** | **String** | The name of the wallet terms. |  |
| **routing_number** | **String** | Routing number of wallet. |  |
| **account_number** | **String** | Account number, together with the routingNumber forms the identifier of the wallet on the ACH network. |  |
| **currency** | **String** | Currency of the wallet. |  |
| **balance** | **Integer** | The balance amount (in cents). The balance represents the funds that are currently in the wallet (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
| **hold** | **Integer** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
| **available** | **Integer** | The available balance for spending (in cents). Equals the balance minus the hold amount. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **freeze_reason** | **String** | Optional. The reason the wallet was frozen, either Fraud, ByBank, or free-text description. | [optional] |
| **close_reason** | **String** | Optional. The reason the wallet was closed, either ByCustomer or Fraud. | [optional] |
| **fraud_reason** | **String** | Optional. The expanded fraud reason for closing the wallet when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::WalletAccountAttributes.new(
  created_at: null,
  name: null,
  status: null,
  wallet_terms: null,
  routing_number: null,
  account_number: null,
  currency: null,
  balance: null,
  hold: null,
  available: null,
  tags: null,
  freeze_reason: null,
  close_reason: null,
  fraud_reason: null
)
```

