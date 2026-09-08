# UnitFinanceSdk::ReceivedACHTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**ReceivedACHTransactionAttributes**](ReceivedACHTransactionAttributes.md) |  |  |
| **relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReceivedACHTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

