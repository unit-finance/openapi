# UnitFinanceSdk::DepositAccountAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | Optional. The date the resource was updated. | [optional] |
| **name** | **String** | Name of the account holder. |  |
| **deposit_product** | **String** | The name of the deposit product. |  |
| **routing_number** | **String** | Routing number of account (9 digits). |  |
| **account_number** | **String** | Optional. Account number (10-12 digits), together with the routingNumber forms the identifier of the account on the ACH network. | [optional] |
| **secondary_account_number** | [**DepositAccountAttributesSecondaryAccountNumber**](DepositAccountAttributesSecondaryAccountNumber.md) |  | [optional] |
| **currency** | **String** | Currency of the account. |  |
| **balance** | **Integer** | The balance amount (in cents). The balance represents the funds that are currently in the account (not taking into account future commitments). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. |  |
| **hold** | **Integer** | The hold amount (in cents). The hold represents funds that are not available for spending, due to an outstanding card authorization. |  |
| **available** | **Integer** | The available balance for spending (in cents). Equals the balance minus the hold amount. |  |
| **overdraft_limit** | **Integer** | Optional. Overdraft limit in cents. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **status** | **String** | Status of the account, either Open, Frozen, or Closed. |  |
| **interest_terms** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The interest terms of the deposit account. Only available if extraFields[account] is used when calling the Get Account by Id endpoint. | [optional] |
| **freeze_reason** | **String** | Optional. The reason the account was frozen, either Fraud, ByBank, or free-text description. | [optional] |
| **close_reason** | **String** | Optional. The reason the account was closed (for example ByCustomer, Fraud, ByBank, or NegativeBalance). | [optional] |
| **close_reason_text** | **String** | Optional. Free-text close reason details (up to 255 characters). | [optional] |
| **fraud_reason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] |
| **masked_account_number** | **String** | Optional. Masked account number. Only available if extraFields[account]&#x3D;maskedAccountNumber is used. | [optional] |
| **is_overdrawn_within_limit** | **Boolean** | Optional. Whether the account is overdrawn while still within the configured overdraft limit. | [optional] |
| **daca_status** | **String** | Optional. The account DACA (Deposit Account Control Agreements) status. Can be one of: Entered, Activated. | [optional] |
| **daca_operators** | **Array&lt;String&gt;** | Optional. DACA operators. Values can include Org, Unit, and Bank. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::DepositAccountAttributes.new(
  created_at: null,
  updated_at: null,
  name: null,
  deposit_product: null,
  routing_number: null,
  account_number: null,
  secondary_account_number: null,
  currency: null,
  balance: null,
  hold: null,
  available: null,
  overdraft_limit: null,
  tags: null,
  status: null,
  interest_terms: null,
  freeze_reason: null,
  close_reason: null,
  close_reason_text: null,
  fraud_reason: null,
  masked_account_number: null,
  is_overdrawn_within_limit: null,
  daca_status: null,
  daca_operators: null
)
```

