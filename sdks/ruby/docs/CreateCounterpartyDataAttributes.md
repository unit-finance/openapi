# UnitFinanceSdk::CreateCounterpartyDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | The account holder&#39;s name (whether an individual or a business, maximum of 50 characters). |  |
| **routing_number** | **String** | Valid 9-digit ABA routing transit number. |  |
| **account_number** | **String** | Bank account number. |  |
| **account_type** | **String** | (defaults to checking). Either Checking, Savings or Loan. |  |
| **type** | **String** | Either Business, Person or Unknown. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. | [optional] |
| **permissions** | **String** | Optional, custom counterparty permissions. Only DebitOnly or CreditAndDebit are valid values when using the permissions&#39; attribute. &#39;CreditOnly&#39; will be assigned as default value when permissions attribute is not declared. If the account and routing number of the counterparty belong to an account under your org on Unit, you may specify \&quot;CreditAndDebit\&quot; or \&quot;DebitOnly\&quot; permissions as well. | [optional] |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateCounterpartyDataAttributes.new(
  name: Joe Doe,
  routing_number: 011000133,
  account_number: 123,
  account_type: Checking,
  type: Person,
  tags: null,
  permissions: null,
  idempotency_key: null
)
```

