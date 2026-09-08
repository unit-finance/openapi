# UnitFinanceSdk::WriteOffTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  |  |
| **relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::WriteOffTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

