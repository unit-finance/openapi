# UnitFinanceSdk::CloseCreditAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reason** | **String** | The reason for closing the account. Either ByCustomer, Fraud or Overdue. If not specified, will default to ByCustomer. | [optional] |
| **fraud_reason** | **String** | Optional. The expanded fraud reason for closing the account when Fraud is specified as the reason. Can be one of: (ACHActivity, CardActivity, CheckActivity, ApplicationHistory, AccountActivity, ClientIdentified, IdentityTheft, LinkedToFraudulentCustomer). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CloseCreditAccountDataAttributes.new(
  reason: Overdue,
  fraud_reason: null
)
```

