# UnitFinanceSdk::FeeTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  |  |
| **relationships** | [**FeeReversalTransactionRelationships**](FeeReversalTransactionRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::FeeTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

