# UnitFinanceSdk::ReturnedWireTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**ReturnedWireTransactionAttributes**](ReturnedWireTransactionAttributes.md) |  |  |
| **relationships** | [**ReturnedACHTransactionRelationships**](ReturnedACHTransactionRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReturnedWireTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

