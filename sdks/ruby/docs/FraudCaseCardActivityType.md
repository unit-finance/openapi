# UnitFinanceSdk::FraudCaseCardActivityType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | The id of the fraud case card activity. |  |
| **created_at** | **Time** | The date the activity was created. |  |
| **activity_type** | **String** | The type of the activity. Can be either Authorization or Transaction. |  |
| **card_activity_created_at** | **Time** | The creation date of the original Authorization or Transaction the activity was created upon. |  |
| **card_activity** | **String** | The id of the original Authorization or Transaction of the activity. |  |
| **location** | **String** | The location in which the activity occurred. |  |
| **merchant** | **String** | The name of the merchant of the activity. |  |
| **amount** | **Integer** | The amount (in cents) of the activity. |  |
| **decision** | **String** | The decision made for the activity. Can be one of Pending, Fraud, NoFraud. |  |
| **updated_at** | **Time** | The date the activity was last updated. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::FraudCaseCardActivityType.new(
  id: null,
  created_at: null,
  activity_type: null,
  card_activity_created_at: null,
  card_activity: null,
  location: null,
  merchant: null,
  amount: null,
  decision: null,
  updated_at: null
)
```

