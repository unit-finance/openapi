# UnitFinanceSdk::WireTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**WireTransactionAttributes**](WireTransactionAttributes.md) |  |  |
| **relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::WireTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

