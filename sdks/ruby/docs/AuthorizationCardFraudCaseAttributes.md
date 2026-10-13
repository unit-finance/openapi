# UnitFinanceSdk::AuthorizationCardFraudCaseAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | The status of the card fraud case. Can be one of Created, Active, Closed, Expired. |  |
| **decision** | **String** | The decision made for the card fraud case. Can be one of Pending, Fraud, NoFraud. |  |
| **expires_at** | **Time** | The date the card fraud case expires. |  |
| **card_activities** | [**Array&lt;FraudCaseCardActivityType&gt;**](FraudCaseCardActivityType.md) | The card activities associated with the card fraud case. |  |
| **updated_at** | **Time** | The date the resource was last updated. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::AuthorizationCardFraudCaseAttributes.new(
  created_at: null,
  status: null,
  decision: null,
  expires_at: null,
  card_activities: null,
  updated_at: null
)
```

