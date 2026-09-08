# UnitFinanceSdk::DishonoredACHTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**DishonoredACHTransactionAttributes**](DishonoredACHTransactionAttributes.md) |  |  |
| **relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::DishonoredACHTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

