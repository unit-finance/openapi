# UnitFinanceSdk::CreateCounterpartyWithPlaidTokenDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Either Business, Person or Unknown |  |
| **name** | **String** | The account holder&#39;s name (whether an individual or a business). |  |
| **plaid_processor_token** | **String** | Plaid integration token&lt;br /&gt;See Plaid processor token |  |
| **verify_name** | **Boolean** | Optional, default to false. Verify a match between the name of the counterparty and the name of the external account&#39;s owner as provided by Plaid. If the name verification fails the request will fail with code field set to NameVerificationFailed. | [optional] |
| **permissions** | **String** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. Default is CreditAndDebit. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCounterpartyWithPlaidTokenDataAttributes.new(
  type: Person,
  name: Sherlock Holmes,
  plaid_processor_token: processor-5a62q307-ww0a-6737-f6db-pole26004556,
  verify_name: null,
  permissions: DebitOnly,
  tags: null,
  idempotency_key: null
)
```

