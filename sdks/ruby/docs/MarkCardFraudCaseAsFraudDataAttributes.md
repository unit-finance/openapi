# UnitFinanceSdk::MarkCardFraudCaseAsFraudDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fraudulent_activity_ids** | **Array&lt;Integer&gt;** | The ids of the fraudulent activities. The activities are the card activities that are marked as fraudulent. The activities are linked to the card fraud case. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::MarkCardFraudCaseAsFraudDataAttributes.new(
  fraudulent_activity_ids: [15,16,17]
)
```

