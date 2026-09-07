# UnitFinanceSdk::FreezeCardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reason** | **String** | The freeze reason in free text. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::FreezeCardDataAttributes.new(
  reason: Card is frozen by customer request
)
```

