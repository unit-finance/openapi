# UnitFinanceSdk::CardTransactionAuthorizationRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**CardTransactionAuthorizationRequestAttributes**](CardTransactionAuthorizationRequestAttributes.md) |  |  |
| **relationships** | [**PurchaseAuthorizationRequestRelationships**](PurchaseAuthorizationRequestRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CardTransactionAuthorizationRequest.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

