# UnitFinanceSdk::DisputeAttributesStatusHistoryInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | The dispute status. One of InvestigationStarted, ProvisionallyCredited, Denied, ResolvedLost, ResolvedWon. | [optional] |
| **updated_at** | **Time** | The date the status was set. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::DisputeAttributesStatusHistoryInner.new(
  type: null,
  updated_at: null
)
```

