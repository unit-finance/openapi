# UnitFinanceSdk::UpdateCounterpartyDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **plaid_processor_token** | **String** | Optional, unless updating a Plaid counterparty. Plaid integration token&lt;br /&gt;See Plaid processor token | [optional] |
| **verify_name** | **Boolean** | Optional, default to false. Verify the name of the counterparty, if the name verification fails the request will fail with code field set to NameVerificationFailed. | [optional] |
| **permissions** | **String** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateCounterpartyDataAttributes.new(
  plaid_processor_token: processor-sandbox-b14ad1fd-3398-46a8-a316-5bf574fc2459,
  verify_name: null,
  permissions: null,
  tags: null
)
```

